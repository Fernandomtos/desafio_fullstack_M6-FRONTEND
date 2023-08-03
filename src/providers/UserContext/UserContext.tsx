import { createContext, useEffect, useState } from "react";
import {
  errorResponse,
  iUserContext,
  iUserContextProps,
  iUserDataToken,
  iUserMail,
} from "./@types";
import { LoginData } from "../../components/FormLogin/validator";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterDataResponse } from "../../components/FormRegister/validator";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import jwt_decode from "jwt-decode";

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<iUserDataToken | null>(null);
  const [btnInfo, setBtnInfo] = useState("");
  const [recoverModal, setRecoverModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("desafioM6:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUserData(jwt_decode(token));
    setLoading(false);
  }, []);

  const userLogin = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("desafioM6:token", token);
      setLoading(false);
      setUserData(jwt_decode(token));
      toast.success("Login realizado com sucesso!");
      navigate("dashboard");
    } catch (error) {
      toast.error("E-mail ou senha inválido(s)!");
      console.log(error);
    }
  };

  const createUser = async (data: TRegisterDataResponse) => {
    try {
      setLoading(true);
      await api.post<TRegisterDataResponse>("/users", data);
      navigate("/dashboard");
      toast.success("Usuário criador com sucesso!");
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("desafioM6:token");
    navigate("/");
  };

  const recoverPassword = async (data: iUserMail) => {
    try {
      await api.post("/recoverPass", data);
      navigate("/");
      toast.success("Senha enviado por e-mail!");
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.message);
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        loading,
        createUser,
        logoutUser,
        userData,
        setLoading,
        btnInfo,
        setBtnInfo,
        recoverPassword,
        recoverModal,
        setRecoverModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
