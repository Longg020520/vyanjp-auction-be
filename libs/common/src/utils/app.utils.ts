import { INestApplication } from '@nestjs/common';

export class AppUtils {
  //> Tuỳ từng môi trường có thể set lại timeout
  public static killAppWithGrace = (app: INestApplication) => {
    process.on('SIGINT', async () => {
      setTimeout(() => process.exit(1), 100);
      await app.close();
      process.exit(0);
    });

    // kill -15
    process.on('SIGTERM', async () => {
      setTimeout(() => process.exit(1), 100);
      await app.close();
      process.exit(0);
    });
  };
}
