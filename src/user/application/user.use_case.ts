import { inject, injectable } from 'inversify';
import { UserMapper } from './../domain/user.mapper';
import { UserRepositoryPostgrest } from './../infastructure/repositories/user.repository';
import { TYPES } from '../types'

@injectable()
export class UserUseCase {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: UserRepositoryPostgrest
  ) {}

  public register = async (
    { name, email, username }: { name: string, email: string, username: string }
  ) => {
    const userMapper = new UserMapper({ name, email, username });
    const newUser = await this.userRepository.create(userMapper);

    return newUser;
  }

  public getAllUsers = async () => {
    const users = await this.userRepository.all();

    return users;
  }

  public async findById(id: number) {
    console.log(this.userRepository);
    const user = await this.userRepository.find({id});

    return user;
  }
}
