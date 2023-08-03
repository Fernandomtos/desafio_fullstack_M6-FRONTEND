import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import schema, { ContactData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDiv, StyledDivInput } from "./styles";
import { BtnSubmit } from "../BtnSubmit";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext/ContactContext";

export interface iFormData {
  name: string;
}

export const FormContactName = () => {
  const { contactModal, setContactModal, setSearch } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });

  const searchSubmit: SubmitHandler<iFormData> = async (data) => {
    setSearch(data);
    setContactModal(!contactModal);
  };

  return (
    <div>
      <header>
        <h2>Pesquisar Contato</h2>
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
        <form onSubmit={handleSubmit(searchSubmit)}>
          <StyledDivInput>
            <label htmlFor="name">Nome do Contato</label>
            <input
              type="name"
              id="name"
              placeholder="Digite o nome desejada..."
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </StyledDivInput>

          <BtnSubmit>Pesquisar</BtnSubmit>
        </form>
      </StyledDiv>
    </div>
  );
};
