import { UserMapper } from './../domain/user.mapper';
import { UserRepository } from './../domain/user.repository';

export class UserUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  public register = async (
    { name, email, username }: { name: string, email: string, username: string }
  ) => {
    console.log('register')
    const userMapper = new UserMapper({ name, email, username });
    const newUser = await this.userRepository.create(userMapper);

    return newUser;
  }

  public getAllUsers = async () => {
    const users = await this.userRepository.all();

    return users;
  }

  public async findById(id: number) {
    const user = await this.userRepository.findById(id);

    return user
  }
}
