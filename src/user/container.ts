import { Container } from 'inversify';
import 'reflect-metadata';
import { UserUseCase } from './application/user.use_case';
import { UserController } from './infastructure/controller';
import { UserRepositoryPostgrest } from './infastructure/repositories/user.repository'
import { TYPES } from './types';
import { UserMapper } from './domain/user.mapper';

const container = new Container();
container.bind<UserRepositoryPostgrest>(TYPES.UserRepository).to(UserRepositoryPostgrest)
container.bind<UserMapper>(TYPES.UserMapper).to(UserMapper)
container.bind<UserUseCase>(TYPES.UserUseCase).to(UserUseCase)
container.bind<UserController>(TYPES.UserController).to(UserController)

export { container };
