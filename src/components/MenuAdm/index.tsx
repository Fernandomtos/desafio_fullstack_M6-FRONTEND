import { useContext } from "react";
import { StyledBtn } from "../BtnLogoutOrBack/styles";
import { StyledDiv } from "./sytes";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { useNavigate } from "react-router-dom";

export const MenuAdm = () => {
  const { contactsAllUsers } = useContext(ContactContext);
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
      <StyledBtn>Listar Todos</StyledBtn>
      <StyledBtn>Encontrar Usuário</StyledBtn>
      <StyledBtn>Atualizar</StyledBtn>
      <StyledBtn>Deletar</StyledBtn>
    </StyledDiv>
  );
};
