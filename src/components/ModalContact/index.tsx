import { useContext } from "react";
import { FormContact } from "../FormContact";
import { StyledContactModalBox } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";
import { FormContactName } from "../FormContactName";
import { FormRecoverPassword } from "../FormRecoverPassword";
import { FormContactUpdate } from "../FormContactUpdate";
import { FormDeleteUser } from "../FormDeleteUser";
import { FormUserUpdate } from "../FormUserUpdate";

export const ModalContact = () => {
  const { btnInfo } = useContext(UserContext);

  return (
    <StyledContactModalBox>
      {btnInfo === "criarContato" ? <FormContact /> : null}
      {btnInfo === "encontrarcontato" ? <FormContactName /> : null}
      {btnInfo === "recuperarSenha" ? <FormRecoverPassword /> : null}
      {btnInfo === "atualizacaoContato" ? <FormContactUpdate /> : null}
      {btnInfo === "deletarConta" ? <FormDeleteUser /> : null}
      {btnInfo === "editarPerfil" ? <FormUserUpdate /> : null}
      {btnInfo === "editarUser" ? <FormUserUpdate /> : null}
    </StyledContactModalBox>
  );
};
