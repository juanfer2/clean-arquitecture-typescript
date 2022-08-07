import { Request, Response } from "express";
import { UserUseCase } from "../../application/user.use_case";

export class UserController {
  constructor(
    private userUseCase: UserUseCase
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
    // throw new Error("Fake error");

    res.send({users});
  }
}
