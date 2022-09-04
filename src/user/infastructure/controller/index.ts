import { Prisma } from "@prisma/client";
import { ValidationError } from "class-validator";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserUseCase } from "../../application/user.use_case";
import { TYPES } from "../../types";

@injectable()
export class UserController {
  constructor(
    @inject(TYPES.UserUseCase) private userUseCase: UserUseCase
  ) {
    this.create = this.create;
    this.index = this.index;
    this.userUseCase = userUseCase;
  }

  public create = async ({ body }: Request, res: Response, next: Function) => {
    try {
      const user = await this.userUseCase.register(body);

      res.send({ user });
    } catch (error) {
      console.log(error)
      if (error instanceof Array<ValidationError>) {
        res.status(402).send({ error: error });
      } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(402).send({ error: error.message });
      } else { 
        res.status(500).send({ error: error });
      }
    }
  }

  public index = async (_: Request, res: Response) => {
    const users = await this.userUseCase.getAllUsers();

    res.send({users});
  }

  public show = async ({ params }: Request, res: Response) => {
    try {
      const id = params.id
      const user = await this.userUseCase.findById(parseInt(id));

      if (user) {
        res.send({user})
      } else {
        res.status(400).send({message: `user id: ${id} not found`});
      };
    } catch (error: any) {
      res.status(500).send({ error: error });
    }
  }
}
