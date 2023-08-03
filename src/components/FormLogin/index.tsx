import { SubmitHandler, useForm } from "react-hook-form";
import schema, { LoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledBtnPassword, StyledDiv, StyledDivInput } from "./styles";
import { BtnSubmit } from "../BtnSubmit";
import { BtnSignup } from "../BtnSignup";

const FormLogin = () => {
  const { userLogin, setBtnInfo, setRecoverModal, recoverModal } =
    useContext(UserContext);

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<LoginData> = async (data) => {
    userLogin(data);
  };

  return (
    <>
      <StyledDiv>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <StyledDivInput>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail..."
              {...register("email")}
            />
          </StyledDivInput>

          <StyledDivInput>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
              {...register("password")}
            />
          </StyledDivInput>

          <BtnSubmit>Entrar</BtnSubmit>

          <span>Ainda não possui uma conta?</span>
          <BtnSignup />
        </form>
        <StyledBtnPassword
          onClick={() => {
            setBtnInfo("recuperarSenha");
            setRecoverModal(!recoverModal);
          }}
        >
          Esqueci minha senha
        </StyledBtnPassword>
      </StyledDiv>
    </>
  );
};

export default FormLogin;
