import { BtnLogoutOrBack } from "../BtnLogoutOrBack";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src="/img/logo.jpg" alt="Logo da Empresa" />
        <h1>PAINEL DE CONTROLE</h1>;
      </div>
      <nav>
        <BtnLogoutOrBack>Logout</BtnLogoutOrBack>
      </nav>
    </StyledHeader>
  );
};

export default Header;
