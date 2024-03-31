import { APM_INSTANCE } from '@app/apm';
import { ConsoleLogger, Inject, Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Agent } from 'elastic-apm-node';

const isString = (val: any): val is string => typeof val === 'string';

@Injectable()
export class CustomLoggerService extends ConsoleLogger {
  logColor: boolean;

  constructor(
    private configService: ConfigService,
    @Inject(APM_INSTANCE) private apm: Agent,
  ) {
    super('NoContext');

    // console.log(new Date(), '>>>>>>>>> CustomLogger init', !!apm);
    this.logColor = this.configService.get('app.logEnv') == 'local';
  }

  private getContextAndMessages(args: unknown[]) {
    if (args?.length <= 1) {
      return { messages: args, context: this.context };
    }
    const lastElement = args[args.length - 1];
    const isContext = isString(lastElement);
    if (!isContext) {
      return { messages: args, context: this.context };
    }
    return {
      context: lastElement as string,
      messages: args.slice(0, args.length - 1),
    };
  }

  private getContextAndStackAndMessages(args: unknown[]) {
    const { messages, context } = this.getContextAndMessages(args);
    if (messages?.length <= 1) {
      return { messages, context };
    }
    const lastElement = messages[messages.length - 1];
    const isStack = isString(lastElement);
    if (!isStack) {
      return { messages, context };
    }
    return {
      stack: lastElement as string,
      messages: messages.slice(0, messages.length - 1),
      context,
    };
  }

  private printMessage(
    context: string,
    messages: any[],
    logLevel: LogLevel = 'log',
    writeStreamType?: 'stdout' | 'stderr',
  ) {
    const traceId = this.apm.currentTraceIds['trace.id'] || '----';
    const logLevelString = logLevel.toUpperCase().padStart(7, ' ');

    // ### origin nestJS
    // [Nest] 96080  - 01/28/2023, 1:07:34 AM     LOG [NestMicroservice] Nest microservice successfully started
    // super.log(message, ...optionalParams);

    // ### stringify version
    // {"level":"log","dateTime":"28/01/2023 01:07:00","context":"BinancePayTaskService","traceId":"36ea2ee6835792c32871bd37e73cd673","messages":["apm.startTransaction"]}
    // console.log(
    //   JSON.stringify({
    //     level: 'LOG',
    //     dateTime: date.toLocaleString('fr'),
    //     context: context,
    //     traceId: this.apm.currentTraceIds['trace.id'] || 'undefined',
    //     messages,
    //   }),
    // );

    // ### single line version
    // 28/01/2023 01:37:00   LOG f27e3e005e4b6d22122fe77fdb3653c3 [BinancePayService] BinancePayService getWallet with filter {"active":true}
    // 28/01/2023 01:25:00  WARN ---- [BinancePayService] "BinancePayService getWallet with filter" {"active":true,"isOnline":true}
    // 28/01/2023 01:25:00 ERROR ---- [BinancePayService] "BinancePayService getWallet with filter" {"active":true,"isOnline":true}

    const formattedMsgs = this.logColor
      ? messages.map((data) => this.stringifyMessage(data, logLevel))
      : messages.map((data) => {
          if (['number', 'boolean', 'string'].includes(typeof data)) {
            return data;
          }
          return JSON.stringify(data);
        });

    const formattedLogLevel = this.logColor
      ? this.colorize(logLevelString, logLevel)
      : logLevelString;

    const formattedTraceId = this.logColor
      ? this.colorize(traceId, logLevel)
      : traceId;

    const formattedDate = new Date().toLocaleString('fr');

    const composedMessage = `${formattedDate} ${formattedLogLevel} ${formattedTraceId} `;
    if (writeStreamType == 'stderr') {
      // eslint-disable-next-line no-console
      console.error(composedMessage, ...formattedMsgs);
    } else {
      // eslint-disable-next-line no-console
      console.log(composedMessage, ...formattedMsgs);
    }
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]): any {
    // check context
    const { messages, context } = this.getContextAndMessages([
      message,
      ...optionalParams,
    ]);

    this.printMessage(context, messages, 'log');
  }
  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]): any {
    // console.error(...arguments);
    const { messages, context, stack } = this.getContextAndStackAndMessages([
      message,
      ...optionalParams,
    ]);

    this.printMessage(context, messages, 'error', 'stderr');
    this.printStackTrace(stack);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]): any {
    const { messages, context } = this.getContextAndMessages([
      message,
      ...optionalParams,
    ]);

    this.printMessage(context, messages, 'warn');
  }

  debug(message: any, ...optionalParams: any[]): any {
    const { messages, context } = this.getContextAndMessages([
      message,
      ...optionalParams,
    ]);

    this.printMessage(context, messages, 'debug');
  }

  verbose(message: any, ...optionalParams: any[]): any {
    const { messages, context } = this.getContextAndMessages([
      message,
      ...optionalParams,
    ]);

    this.printMessage(context, messages, 'verbose');
  }
}
