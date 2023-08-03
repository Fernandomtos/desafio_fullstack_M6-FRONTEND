import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import schema, { RecoverData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDiv, StyledDivInput } from "./styles";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

export interface iFormData {
  email: string;
}

export const FormRecoverPassword = () => {
  const { recoverPassword, recoverModal, setRecoverModal } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverData>({
    resolver: zodResolver(schema),
  });

  const searchSubmit: SubmitHandler<iFormData> = async (data) => {
    recoverPassword(data);
    setRecoverModal(!recoverModal);
  };

  return (
    <div>
      <header>
        <h2>Recuperação de Senha</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => {
            setRecoverModal(!recoverModal);
          }}
        >
          <MdClose size={21} />
        </button>
      </header>
      <StyledDiv>
        <form onSubmit={handleSubmit(searchSubmit)}>
          <StyledDivInput>
            <label htmlFor="email">Email de Recuperação</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail cadastrado..."
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </StyledDivInput>

          <BtnSubmit>Enviar</BtnSubmit>
        </form>
      </StyledDiv>
    </div>
  );
};
