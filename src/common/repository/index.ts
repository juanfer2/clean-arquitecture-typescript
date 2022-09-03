import { UserPrisma } from "../clients/prisma";
import { PrismaPromise } from "@prisma/client";
import { Repository } from "./models";


export abstract class BaseRepositoryPostgrest<T> implements Repository<T> {
  prismaClient: any;
  
  constructor() {}

  async all(): Promise<T[]> {
    const data = await this.prismaClient.findMany()

    return data;
  }

  async find(id: number): Promise<T> {
    const data = await this.prismaClient.findUnique({where: {id}});

    return data;
  }

  async update(where: any, data: any): Promise<T> {
    const dataResponse = this.prismaClient.update({ where, data})

    return dataResponse;
  }

  delete(where: any): Promise<T> {
    const dataResponse = this.prismaClient.update({ where })

    return dataResponse;
  }
}
