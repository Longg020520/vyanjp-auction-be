import mongoose, { AnyObject, ClientSession } from 'mongoose';

/**
 * Khởi tạo một transaction (Có thể gửi session cũ vào)
 * @param func
 * @param session
 * @returns
 */
export const withTransaction = async <T>(
  func: (session: ClientSession) => Promise<T>,
  session?: ClientSession,
): Promise<T> => {
  if (session) return await func(session);
  session = await mongoose.connections[1].startSession();

  const transactionOptions = {
    readPreference: { mode: 'primary' },
    readConcern: { level: 'majority' },
    writeConcern: { w: 'majority' },
  } as AnyObject;

  try {
    let res;
    await session.withTransaction(async () => {
      res = await func(session as ClientSession);
    }, transactionOptions);

    await session.commitTransaction();
    return res;
  } catch (error) {
    throw error;
  } finally {
    await session.endSession();
  }
};
