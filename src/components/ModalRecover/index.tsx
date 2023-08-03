import { useContext } from "react";
import { StyledRecoverModalBox } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";
import { FormRecoverPassword } from "../FormRecoverPassword";

export const ModalRecover = () => {
  const { btnInfo } = useContext(UserContext);

  return (
    <StyledRecoverModalBox>
      {btnInfo === "recuperarSenha" ? <FormRecoverPassword /> : null}
    </StyledRecoverModalBox>
  );
};
