export interface Repository<T, U, W>{
  all(): Promise<T[]>;
  find(where: W): Promise<T | Error>;
  update(where: W, data: U): Promise<T>
  create(data: U): Promise<T>
  delete(where: W): Promise<T>
}
