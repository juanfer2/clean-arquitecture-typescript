import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserUseCase } from "../../application/user.use_case";
import { TYPES } from "../../types";
import { UserRepositoryPostgrest } from "../repositories/user.repository";

@injectable()
export class UserController {
  constructor(
    @inject(TYPES.UserUseCase) private userUseCase: UserUseCase
  ) {
    this.create = this.create;
    this.index = this.index;
    this.userUseCase = userUseCase;
  }

  public create = async ({ body }: Request, res: Response) => {
    const user = await this.userUseCase.register(body);

    res.send({ user });
  }

  public index = async (_: Request, res: Response) => {
    const users = await this.userUseCase.getAllUsers();

    res.send({users});
  }

  public show = async ({params}: Request, res: Response) => {
    const id = params.id
    const user = await this.userUseCase.findById(parseInt(id));

    res.send({user});
  }
}
