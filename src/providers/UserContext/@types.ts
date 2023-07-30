import { LoginData } from "../../components/FormLogin/validator";
import { TRegisterDataResponse } from "../../components/FormRegister/validator";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserLoginForm {
  email: string;
  password: string;
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

export interface errorResponse {
  message: string;
}

export interface iUserContext {
  userLogin: (data: LoginData) => void;
  loading: boolean;
  createUser: (data: TRegisterDataResponse) => Promise<void>;
  logoutUser: () => void;
  userData: iUser | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
