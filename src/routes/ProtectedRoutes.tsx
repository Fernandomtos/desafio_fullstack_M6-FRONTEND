import { useContext } from "react";
import { UserContext } from "../providers/UserContext/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { loading } = useContext(UserContext);
  const token = localStorage.getItem("desafioM6:token");

  if (loading) {
    return (
      <div className="boxLoading">
        <img src="/img/Spinner-1s-200px.svg" alt="Carregando..." />
      </div>
    );
  }

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
