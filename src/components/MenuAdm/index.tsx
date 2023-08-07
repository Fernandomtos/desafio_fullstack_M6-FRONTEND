import { useContext } from "react";
import { StyledBtn } from "../BtnLogoutOrBack/styles";
import { StyledDiv } from "./sytes";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext/UserContext";

export const MenuAdm = () => {
  const { contactsAllUsers } = useContext(ContactContext);
  const { setBtnInfo, allUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <span>Controle de Administrador</span>
      <StyledBtn onClick={() => contactsAllUsers()}>
        Listar Todos Contatos
      </StyledBtn>
      <StyledBtn onClick={() => navigate("/register")}>
        Cadastrar Usuário
      </StyledBtn>
      <StyledBtn
        onClick={() => {
          setBtnInfo("listarUsuarios");
          allUser();
        }}
      >
        Listar Todos Usuários
      </StyledBtn>
      <StyledBtn>Encontrar Usuário</StyledBtn>
    </StyledDiv>
  );
};
