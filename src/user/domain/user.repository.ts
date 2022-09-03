import { BaseRepositoryPostgrest } from '../../common/repository';
import { UserEntity, UserWhere } from './user.entity';
import { UserMapper } from './user.mapper';

export interface UserRepository extends BaseRepositoryPostgrest<UserEntity, UserWhere, UserMapper>{}
