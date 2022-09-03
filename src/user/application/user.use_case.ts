import { inject, injectable } from 'inversify';
import { UserMapper } from './../domain/user.mapper';
import { UserValidator } from './../domain/user.validator';
import { UserRepositoryPostgrest } from './../infastructure/repositories/user.repository';
import { TYPES } from '../types'
import e from 'express';
import { validateOrReject } from 'class-validator';
import logger from '../../common/utils/logger';
import {capitalizeFirstLetter} from '../../common/utils';

@injectable()
export class UserUseCase {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: UserRepositoryPostgrest
  ) {
    //this.validateUser = this.validateUser;
  }

  public register = async (
    { name, email, username }: { name: string, email: string, username: string }
  ) => {
    try {
      const userMapper = new UserMapper({ name, email, username });
      await this.validateUser(userMapper);
      const newUser = await this.userRepository.create(userMapper);

      return newUser;
    } catch (error) {
      throw error;
    }
  }

  public getAllUsers = async () => {
    const users = await this.userRepository.all();

    return users;
  }

  public async findById(id: number) {
    const user = await this.userRepository.find({id});

    return user;
  }

  private async validateUser(userMapper: UserMapper) {
    try {
      await validateOrReject(userMapper);
    } catch (error: any) {
      console.log(error)
      let message = ''

      error.map((e: any) => {
        console.log(e.constraints.isEmail)
        const property = capitalizeFirstLetter(e.property)
        console.log(property)
        console.log(e.constraints['is'+property])
        message = message + `${e.property}: ${e.value} ${e.constraints['is'+property]}`
      })

      throw error;
    }
  }
}
