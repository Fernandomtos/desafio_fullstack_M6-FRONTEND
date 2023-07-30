import { useContext } from "react";
import { StyledBtn } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

interface iChildren {
  children: string;
}

export const BtnLogoutOrBack = ({ children }: iChildren) => {
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutOrBack = () => {
    if (children === "Logout") {
      logoutUser();
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <StyledBtn type="button" onClick={() => logoutOrBack()}>
      {children}
    </StyledBtn>
  );
};
