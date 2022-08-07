import { UserEntity } from './user.entity';

export interface UserRepository {
  findById(id: number): Promise<UserEntity | null>;
  create(
    { name, email, username }: { name: string, email: string, username: string; }
  ): Promise<UserEntity | null>;
  all(): Promise<UserEntity[] | null>
}
