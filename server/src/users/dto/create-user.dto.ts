import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsDate()
  @Type(() => Date)
  date_of_birth: Date;

  @IsString()
  role: string;

  @IsString()
  @IsOptional()
  address?: string;
}
