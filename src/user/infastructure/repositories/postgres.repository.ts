import { UserPrisma } from '../../../common/clients/prisma';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import { injectable } from "inversify"

export class PostgresRepository implements UserRepository {
  async findById(id: number): Promise<any | null> {
    const user = UserPrisma.findUnique({where: {id}});

    return user;
  }

  async create(
    { name, email, username }: { name?: string | undefined; email: string; username: string; }
  ): Promise<any | null> {
    const data = { name, email, username }
    const user = await UserPrisma.create({data});

    return user;
  }

  async all(): Promise<any[] | null> {
    const users = UserPrisma.findMany();

    return users;
  }
}
