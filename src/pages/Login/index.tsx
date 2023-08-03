import { useContext } from "react";
import FormLogin from "../../components/FormLogin";
import { StyledHeader, StyledMainContainer } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ModalRecover } from "../../components/ModalRecover";

const Login = () => {
  const { recoverModal } = useContext(UserContext);

  return (
    <>
      {recoverModal && <ModalRecover />}
      <StyledHeader>
        <img src="./img/login_1000946.png" alt="icone Login" />
      </StyledHeader>
      <StyledMainContainer>
        <FormLogin />
      </StyledMainContainer>
    </>
  );
};

export default Login;
