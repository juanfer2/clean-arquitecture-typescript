import { UserPrisma } from "../clients/prisma";
import { Prisma, PrismaPromise } from "@prisma/client";
import { Repository } from "./models";
import { injectable } from "inversify";

@injectable()
export abstract class BaseRepositoryPostgrest<T, U, W> implements Repository<T, U, W> {
  prismaClient: any;

  constructor() {}

  async all(): Promise<T[]> {
    const data = await this.prismaClient.findMany()

    return data;
  }

  async find(where: W): Promise<T | Error> {
    try {
      const data = await this.prismaClient.findUnique({where});
  
      return data;
    } catch (e: any) {
      if (e instanceof Prisma.PrismaClientValidationError) {
        throw new Error(e.message)
      }

      throw new Error(e.message)
    }
  }

  async create(data: U): Promise<T> {
    const newData = await this.prismaClient.create({data});

    return newData;
  }

  async update(where: W, data: U): Promise<T> {
    const dataResponse = this.prismaClient.update({ where, data})

    return dataResponse;
  }

  async delete(where: W): Promise<T> {
    const dataResponse = await this.prismaClient.update({ where })

    return dataResponse;
  }
}
