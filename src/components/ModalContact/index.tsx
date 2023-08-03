import { useContext } from "react";
import { FormContact } from "../FormContact";
import { StyledContactModalBox } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";
import { FormContactName } from "../FormContactName";
import { FormRecoverPassword } from "../FormRecoverPassword";

export const ModalContact = () => {
  const { btnInfo } = useContext(UserContext);

  return (
    <StyledContactModalBox>
      {btnInfo === "criarContato" ? <FormContact /> : null}
      {btnInfo === "encontrarcontato" ? <FormContactName /> : null}
      {btnInfo === "recuperarSenha" ? <FormRecoverPassword /> : null}
    </StyledContactModalBox>
  );
};
