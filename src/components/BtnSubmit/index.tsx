import { StyledBtn } from "./styles";

interface iChildren {
  children: string;
}

export const BtnSubmit = ({ children }: iChildren) => {
  return <StyledBtn type="submit">{children}</StyledBtn>;
};
