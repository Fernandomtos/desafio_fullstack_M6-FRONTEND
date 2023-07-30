import { createContext, useEffect, useState } from "react";
import {
  errorResponse,
  iUser,
  iUserContext,
  iUserContextProps,
} from "./@types";
import { LoginData } from "../../components/FormLogin/validator";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterDataResponse } from "../../components/FormRegister/validator";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUSerData] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("desafioM6:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const userLogin = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("desafioM6:token", token);
      setLoading(false);
      setUSerData(response.data.userData);
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

  return (
    <UserContext.Provider
      value={{
        userLogin,
        loading,
        createUser,
        logoutUser,
        userData,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
