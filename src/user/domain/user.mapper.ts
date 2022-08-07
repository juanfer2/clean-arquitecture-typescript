import { UserEntity } from './user.entity';

export class UserMapper implements UserEntity{
  name: string;
  email: string;
  username: string;

  constructor({name, email, username}: {name: string, email: string, username: string}) {
    this.name = name;  
    this.email = email;  
    this.username = username;  
  }
}
