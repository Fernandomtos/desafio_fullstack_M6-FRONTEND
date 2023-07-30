import { SubmitHandler, useForm } from "react-hook-form";
import {
  schemaRegisterRequest,
  TRegisterDataResponse,
  TRegisterData,
  schemaRegisterResponse,
} from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledDiv, StyledDivInput } from "./styles";
import { BtnSubmit } from "../BtnSubmit";
import { BtnLogoutOrBack } from "../BtnLogoutOrBack";

const FormRegister = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(schemaRegisterRequest),
  });

  const submit: SubmitHandler<TRegisterData> = async (data) => {
    const dataReg: TRegisterDataResponse = schemaRegisterResponse.parse(data);

    createUser(dataReg);
  };

  return (
    <>
      <StyledDiv>
        <h2>Crie sua conta</h2>
        <form onSubmit={handleSubmit(submit)}>
          <StyledDivInput>
            <label htmlFor="name">Nome</label>
            <input
              type="name"
              id="name"
              placeholder="Digite seu nome..."
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </StyledDivInput>
          <StyledDivInput>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail..."
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </StyledDivInput>
          <StyledDivInput>
            <label htmlFor="fone">Telefone</label>
            <input
              type="fone"
              id="fone"
              placeholder="Digite seu telefone..."
              {...register("fone")}
            />
            <p>{errors.fone?.message}</p>
          </StyledDivInput>
          <StyledDivInput>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </StyledDivInput>
          <StyledDivInput>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme sua senha..."
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
          </StyledDivInput>
          <BtnSubmit>Cadastrar</BtnSubmit>
          <BtnLogoutOrBack>Voltar</BtnLogoutOrBack>
        </form>
      </StyledDiv>
    </>
  );
};

export default FormRegister;
