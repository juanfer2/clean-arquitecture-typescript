import { PostgresRepository } from './user/infastructure/repositories/db.repository';
import { UserRepository } from './user/domain/user.repository';
import TYPES from './types';
import { Container } from 'inversify';


const container = new Container();

container.bind<UserRepository>(TYPES.UserRepository).to(PostgresRepository);

export default container;
