import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import schema, { ContactData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDiv, StyledDivInput } from "./styles";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext/ContactContext";

export const FormContact = () => {
  const { contactModal, setContactModal, createContacts } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <header>
        <h2>Registrar Contato</h2>
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
        <form onSubmit={handleSubmit(createContacts)}>
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

          <BtnSubmit>Cadastrar</BtnSubmit>
        </form>
      </StyledDiv>
    </div>
  );
};
