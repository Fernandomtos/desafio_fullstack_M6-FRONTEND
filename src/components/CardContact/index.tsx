import { iContact } from "../../providers/ContactContext/@types";
import { SyledCard } from "./styles";

interface iContactProps {
  contact: iContact;
}

export const CardContact = ({ contact }: iContactProps) => {
  return (
    <SyledCard>
      <img src="/img/icon_user.png" alt="imagem contato" />
      <p>ref. {contact.id}</p>
      <h2>Nome: {contact.name}</h2>
      <p>E-mail: {contact.email}</p>
      <p>Telefone: {contact.fone}</p>
    </SyledCard>
  );
};
