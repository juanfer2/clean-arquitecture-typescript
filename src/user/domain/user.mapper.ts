import { injectable } from 'inversify';
import { UserEntity, UserWhere } from './user.entity';
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

@injectable()
export class UserMapper implements UserEntity{
  @IsNotEmpty({message: 'Title is too short',})
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  username: string

  constructor({name, email, username}: {name: string, email: string, username: string}) {
    this.name = name;  
    this.email = email;  
    this.username = username;  
  }

  // setAttributes = (params: UserWhere) => {
  //   this.name = params.name || this.name;  
  //   this.email = params.email || this.email;  
  //   this.username = params.username || this.username;  
// 
  //   return this;
  // }
}
