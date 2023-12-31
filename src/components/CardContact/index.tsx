import { useContext } from "react";
import { iContact } from "../../providers/ContactContext/@types";
import { SyledCard } from "./styles";
import { BsTrash } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";

interface iContactProps {
  contact: iContact;
}

export const CardContact = ({ contact }: iContactProps) => {
  const { deleteContacts, contactModal, setContactModal, setContactId } =
    useContext(ContactContext);
  const { setBtnInfo } = useContext(UserContext);

  const id: number = contact.id!;

  return (
    <SyledCard>
      <img src="/img/icon_user.png" alt="imagem contato" />
      <p>ref. {contact.id}</p>
      <h2>Nome: {contact.name}</h2>
      <p>E-mail: {contact.email}</p>
      <p>Telefone: {contact.fone}</p>
      <div className="btnContact">
        <button onClick={() => deleteContacts(id)}>
          <BsTrash size={25} />
        </button>
        <button
          onClick={() => {
            setBtnInfo("atualizacaoContato");
            setContactId(id);
            setContactModal(!contactModal);
          }}
        >
          <FaUserEdit size={25} />
        </button>
      </div>
    </SyledCard>
  );
};
