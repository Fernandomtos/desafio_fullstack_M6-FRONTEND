import { useContext } from "react";
import { StyledBtn } from "../BtnLogoutOrBack/styles";
import { StyledDiv } from "./sytes";
import { ContactContext } from "../../providers/ContactContext/ContactContext";

export const MenuUser = () => {
  const { contactsUser, setContactModal, contactModal } =
    useContext(ContactContext);

  return (
    <StyledDiv>
      <form>
        <input type="text" placeholder="digite a ref. do contato..." />
        {/* <button>Pesquisar</button> */}
      </form>
      <StyledBtn
        onClick={() => {
          setContactModal(!contactModal);
        }}
      >
        Criar Contato
      </StyledBtn>
      <StyledBtn onClick={() => contactsUser()}>Encontrar Contato</StyledBtn>
      <StyledBtn onClick={() => contactsUser()}>Listar Meus Contatos</StyledBtn>
      <span>Controle de Perfil</span>
      <StyledBtn>Editar Perfil</StyledBtn>
      <StyledBtn>Deletar</StyledBtn>
    </StyledDiv>
  );
};
