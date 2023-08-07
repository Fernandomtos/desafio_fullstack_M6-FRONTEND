import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import schemaUpdate, { ContactDataUpdate } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDiv, StyledDivInput } from "./styles";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { iContactUpdate } from "../../providers/ContactContext/@types";

export const FormContactUpdate = () => {
  const { contactModal, setContactModal, updateContacts } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDataUpdate>({
    resolver: zodResolver(schemaUpdate),
  });

  const submitUpdate: SubmitHandler<iContactUpdate> = async (data) => {
    let contactData: iContactUpdate = {};

    if (data.email) {
      contactData = { ...contactData, email: data.email };
    }

    if (data.name) {
      contactData = { ...contactData, name: data.name };
    }

    if (data.fone) {
      contactData = { ...contactData, fone: data.fone };
    }

    if (Object.keys(contactData).length != 0) {
      updateContacts(contactData);
      setContactModal(!contactModal);
    } else {
      setContactModal(!contactModal);
    }
  };

  return (
    <div>
      <header>
        <h2>Atualizar Contato</h2>
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

          <BtnSubmit>Atualizar</BtnSubmit>
        </form>
      </StyledDiv>
    </div>
  );
};
