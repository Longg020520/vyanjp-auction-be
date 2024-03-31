// import { Inject } from '@nestjs/common';
// import { ApmService } from './service';
// import { currentTransaction } from 'elastic-apm-node';

// export const ApmCurrentTransaction = (): MethodDecorator => {
export const ApmCurrentTransaction = () => {
  // return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  //   // this is equivalent to have a constructor like constructor(yourservice: YourServiceClass)
  //   // note that this will injected to the instance, while your decorator runs for the class constructor
  //   const injectAppService = Inject(ApmService);
  //   injectAppService(target, 'apmService');

  //   // we use a ref here so we can type it
  //   const apmService: ApmService = target.apmService;
  //   return apmService.apmInstance?.currentTransaction;
  // };

  return 1;
};
