import { PostgresRepository } from '../repositories/postgres.repository';
import { UserUseCase } from '../../application/user.use_case';
import { UserController } from '../controller';
import { Router } from 'express';
import { container } from '../../container'
import 'reflect-metadata';
import { TYPES } from '../../types';


/**
 * Instance Repositories
 */
 //const userRepository = container.get<PostgresRepository>(TYPES.UserRepository)

 /**
  * Instance useCases
  */
 // const userUseCase = new UserUseCase(userRepository);
 // const userUseCase = container.get<UserUseCase>(TYPES.UserUseCase);
 /**
  * Instance Controllers
  */
 // const userController = new UserController(userUseCase);

/**
 * Instance Repositories
 */
// const userRepository = container.get<PostgresRepository>(TYPES.UserRepository)

const userController = container.get<UserController>(TYPES.UserController);

const route = Router();

route.post('/users', userController.create);
route.get('/users/:id', userController.show);
route.get('/users', userController.index);

export default route;
