import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class LinkOrgBPayWalletDto {
  @IsEmail()
  bpayWalletEmail: string;

  @IsBoolean()
  link: boolean;

  @IsString()
  @IsOptional()
  orgId?: string;
}
export class AdminBasicOrgRequestDto {
  @IsString()
  @IsNotEmpty()
  orgId: string;
}

export class CreateTransferTargetDto {
  @IsString()
  @IsOptional()
  orgId?: string;

  @IsString()
  amount: string;

  @IsString()
  @IsNotEmpty()
  target: string;
}

export class SendNotificationDto {
  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNumber()
  @IsOptional()
  date?: number;
}

export class SetBNPWalletServiceKeyDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  apiKey: string;

  @IsString()
  @IsOptional()
  apiSecret: string;
}

export class ProcessBinancePayTransactionDto {
  @IsString()
  @IsNotEmpty()
  transactionId: string;
}
