import { UserRepository } from "../domain/user.repository";

export class UserUseCase2 {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  public register = async (
    { name, email, username }: { name: string, email: string, username: string }
  ) => {
    console.log(this.userRepository);
    return null;
  }
}
