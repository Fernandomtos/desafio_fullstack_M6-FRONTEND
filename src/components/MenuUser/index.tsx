import { useContext } from "react";
import { StyledBtn } from "../BtnLogoutOrBack/styles";
import { StyledDiv } from "./sytes";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import { BiSearchAlt } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";

export interface iFormData {
  id: number;
}

export const MenuUser = () => {
  const { contactsUser, setContactModal, contactModal, searchContact } =
    useContext(ContactContext);
  const { setBtnInfo } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iFormData>();

  const submit: SubmitHandler<iFormData> = async (data) => {
    const findContactId = searchContact?.find((contact) => {
      return contact.id == data.id;
    });

    console.log(findContactId);
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="number"
          id="id"
          placeholder="digite a ref. do contato..."
          {...register("id")}
        />
        <button type="submit">
          <BiSearchAlt size={21} />
        </button>
      </form>

      <StyledBtn
        onClick={() => {
          setBtnInfo("criarContato");
          setContactModal(!contactModal);
        }}
      >
        Criar Contato
      </StyledBtn>

      <StyledBtn
        onClick={() => {
          setBtnInfo("encontrarcontato");
          setContactModal(!contactModal);
        }}
      >
        Encontrar Contato
      </StyledBtn>

      <StyledBtn onClick={() => contactsUser()}>Listar Meus Contatos</StyledBtn>
      <span>Controle de Perfil</span>
      <StyledBtn>Editar Perfil</StyledBtn>
      <StyledBtn>Deletar</StyledBtn>
    </StyledDiv>
  );
};
