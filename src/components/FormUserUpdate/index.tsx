import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import schemaUpdate, { UserDataUpdate } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDiv, StyledDivInput } from "./styles";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { iUserUpdate } from "../../providers/UserContext/@types";
import { UserContext } from "../../providers/UserContext/UserContext";

export const FormUserUpdate = () => {
  const { contactModal, setContactModal } = useContext(ContactContext);
  const { updateUser, userData, userId } = useContext(UserContext);
  const { btnInfo } = useContext(UserContext);

  let idUser: number | undefined = 0;

  if (btnInfo == "editarPerfil") {
    idUser = userData?.sub;
  } else {
    idUser = userId;
  }

  console.log(idUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataUpdate>({
    resolver: zodResolver(schemaUpdate),
  });

  const submitUpdate: SubmitHandler<iUserUpdate> = async (data) => {
    let userDataUpdate: iUserUpdate = {};

    if (data.email) {
      userDataUpdate = { ...userDataUpdate, email: data.email };
    }

    if (data.name) {
      userDataUpdate = { ...userDataUpdate, name: data.name };
    }

    if (data.fone) {
      userDataUpdate = { ...userDataUpdate, fone: data.fone };
    }

    if (data.password) {
      userDataUpdate = { ...userDataUpdate, password: data.password };
    }

    if (Object.keys(userDataUpdate).length != 0) {
      updateUser(userDataUpdate, idUser!);
      setContactModal(!contactModal);
    } else {
      setContactModal(!contactModal);
    }
  };

  return (
    <div>
      <header>
        <h2>Editar Perfil</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => {
            setContactModal(!contactModal);
          }}
        >
          <MdClose size={21} />
        </button>
      </header>
      <StyledDiv>
        <form onSubmit={handleSubmit(submitUpdate)}>
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
              placeholder="Redefinir sua senha..."
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </StyledDivInput>

          <BtnSubmit>Atualizar</BtnSubmit>
        </form>
      </StyledDiv>
    </div>
  );
};
