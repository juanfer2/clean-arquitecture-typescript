export interface UserEntity {
  // id?: number | null;
  name: string;
  email: string;
  username: string;
}

export interface UserWhere {
  id?: number;
  name?: string;
  email?: string;
  username?: string;
}
