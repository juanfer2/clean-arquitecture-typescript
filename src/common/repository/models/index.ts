export interface Repository<T>{
  all(): Promise<T[]>;
  find(id: number): Promise<T>;
  update(where: any, data: T): Promise<T>
  delete(where: any): Promise<T>
}
