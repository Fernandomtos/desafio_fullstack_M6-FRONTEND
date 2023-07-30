import FormLogin from "../../components/FormLogin";
import { StyledHeader, StyledMainContainer } from "./styles";

const Login = () => {
  return (
    <>
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
