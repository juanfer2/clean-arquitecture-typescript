import { User } from "../model";
import { BaseRepositoryPostgrest } from "../../../common/repository";
import { UserPrisma } from "../../../common/clients/prisma";
import { UserMapper } from "../../domain/user.mapper";
import { UserWhere } from "../../domain/user.entity";
import { injectable } from "inversify";
import { UserRepository } from "../../domain/user.repository";

@injectable()
export class UserRepositoryPostgrest extends BaseRepositoryPostgrest<User, UserMapper, UserWhere> implements UserRepository {
  constructor() {
    super();
    this.prismaClient = UserPrisma
  }
}
