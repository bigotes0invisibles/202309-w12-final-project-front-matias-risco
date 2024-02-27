export interface UserBaseStructure {
  name: string;
  password: string;
}

export interface UserStructure extends Omit<UserBaseStructure, "password"> {
  token: string;
}

export type UserStateStructure = UserStructure;
