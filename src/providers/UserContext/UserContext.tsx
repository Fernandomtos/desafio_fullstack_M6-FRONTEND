import { createContext, useEffect, useState } from "react";
import {
  errorResponse,
  iUser,
  iUserContext,
  iUserContextProps,
  iUserDataToken,
  iUserMail,
  iUserUpdate,
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
  const [listUsers, setListUsers] = useState<iUser[] | null>(null);
  const [dataUserId, setDataUserId] = useState<iUser | null>(null);
  const [userId, setUserId] = useState(0);
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

  //deletar a Conta;
  const deleteUser = async (idUser: number) => {
    try {
      await api.delete(`/users/${idUser}`);
      toast.success("Contato deletado com sucesso!");
      if (idUser == userData?.sub) {
        toast.warning("Logout necessário para validação das atualizações!");
        logoutUser();
      }
    } catch (error) {
      toast.warning("Usuário já foi deletado!");
      console.log(error);
    }
  };

  //listar conta por id
  const readUser = async (idUser: number) => {
    try {
      const response = await api.get(`/users/${idUser}`);
      setDataUserId(response.data)
    } catch (error) {
      toast.warning("Usuário não encontrado!");
    }
  }

  //atualizar user;
  const updateUser = async (data: iUserUpdate, idUser: number) => {
    try {
      await api.patch<iUser>(`/users/${idUser}`, data);
      toast.success("Contato atualizado com sucesso!");
      if (idUser == userData?.sub) {
        toast.warning("Logout necessário para validação das atualizações!");
        logoutUser();
      }
    } catch (error) {
      toast.warning("Não é possível atualizar Usuário deletado!");
      console.log(error);
    }
  };

  const allUser = async () => {
    try {
      const response = await api.get<iUser[]>("/users");
      setListUsers(response.data);
    } catch (error) {
      console.log(error);
    }
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
        deleteUser,
        updateUser,
        setUserData,
        listUsers,
        allUser,
        userId,
        setUserId,
        readUser,
        dataUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
