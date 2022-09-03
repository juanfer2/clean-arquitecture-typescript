import { User } from "../model";
import { BaseRepositoryPostgrest } from "../../../common/repository";
import { UserPrisma } from "../../../common/clients/prisma";

export class UserRepositoryP extends BaseRepositoryPostgrest<User> {
  constructor() {
    super();
    this.prismaClient = UserPrisma
  }
}
