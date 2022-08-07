import { PostgresRepository } from '../repositories/db.repository';
import { UserUseCase } from '../../application/user.use_case';
import { UserController } from '../controller';
import { Router } from 'express';

const route = Router();

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

route.post('/users', userController.create);
route.get('/users', userController.index);

export default route;
