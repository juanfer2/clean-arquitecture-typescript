import { PostgresRepository } from '../repositories/postgres.repository';
import { UserUseCase } from '../../application/user.use_case';
import { UserController } from '../controller';
import { Router } from 'express';

/**
 * Instance Repositories
 */
const userRepository = new PostgresRepository();

/**
 * Instance useCases
 */
const userUseCase = new UserUseCase(userRepository);

/**
 * Instance Controllers
 */
const userController = new UserController(userUseCase);

const route = Router();

route.post('/users', userController.create);
route.get('/users', userController.index);

export default route;
