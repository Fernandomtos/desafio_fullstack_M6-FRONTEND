import { LoginData } from "../../components/FormLogin/validator";
import { TRegisterDataResponse } from "../../components/FormRegister/validator";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserLoginForm {
  email: string;
  password: string;
}

export interface iUserMail {
  email: string;
}

export interface iUser {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  fone: string;
  createdAt: string;
  deletedAt: string;
}

export interface iUserUpdate {
  name?: string;
  email?: string;
  fone?: string;
  password?: string;
}

export interface iUserDataToken {
  admin: boolean;
  exp: number;
  iat: number;
  name: string;
  sub: number; // id do user.
}

export interface errorResponse {
  message: string;
}

export interface iUserContext {
  userLogin: (data: LoginData) => void;
  loading: boolean;
  createUser: (data: TRegisterDataResponse) => Promise<void>;
  logoutUser: () => void;
  userData: iUserDataToken | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  btnInfo: string;
  setBtnInfo: React.Dispatch<React.SetStateAction<string>>;
  recoverPassword: (data: iUserMail) => Promise<void>;
  recoverModal: boolean;
  setRecoverModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: (idUser: number) => Promise<void>;
  updateUser: (data: iUserUpdate, idUser: number) => Promise<void>;
  setUserData: React.Dispatch<React.SetStateAction<iUserDataToken | null>>;
  listUsers: iUser[] | null;
  allUser: () => Promise<void>;
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
}
