import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsString,
  IsNotEmpty
} from 'class-validator';
import { UserEntity, UserWhere } from './user.entity';


export class UserValidator {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  username: string

  constructor({name, username, email}: {name: string, username: string, email: string}) {
    this.name = name;
    this.username = username;
    this.email = email;
  }
}
