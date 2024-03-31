import { ClientSession } from 'mongoose';

/**
 * Khi transaction commit sẽ chạy vào func trong hàm này
 * @param func
 * @param session
 */
export const waitForSessionCommit = async (
  func: () => Promise<void> | void,
  session?: ClientSession,
) => {
  if (!session) {
    func();
  } else {
    session.addListener('ended', async (session: ClientSession) => {
      if (session.transaction.isCommitted) await func();
    });
  }
};
