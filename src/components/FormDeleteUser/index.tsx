import { MdClose } from "react-icons/md";
import {
  StyledBtnDelete,
  StyledDiv,
  StyledDivMessage,
  StyledBtnCancelar,
} from "./styles";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";

export const FormDeleteUser = () => {
  const { contactModal, setContactModal } = useContext(ContactContext);
  const { deleteUser, userData } = useContext(UserContext);

  const idUser: number | undefined = userData?.sub;

  return (
    <div>
      <header>
        <h2>Deletar Usuário</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => {
            setContactModal(!contactModal);
          }}
        >
          <MdClose size={21} />
        </button>
      </header>
      <StyledDiv>
        <p>Atenção! Realmente deseja excluir sua conta?</p>
        <StyledDivMessage>
          <StyledBtnDelete
            onClick={() => {
              deleteUser(idUser!);
              setContactModal(!contactModal);
            }}
          >
            Excluir Conta
          </StyledBtnDelete>
          <StyledBtnCancelar
            onClick={() => {
              setContactModal(!contactModal);
            }}
          >
            Cancelar
          </StyledBtnCancelar>
        </StyledDivMessage>
      </StyledDiv>
    </div>
  );
};
