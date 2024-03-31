import { AdminDocument, OSADocument, SSADocument } from '@app/contracts';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const User = createParamDecorator<
  AdminDocument | OSADocument | SSADocument
>((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  return request.user as AdminDocument | OSADocument | SSADocument;
});
