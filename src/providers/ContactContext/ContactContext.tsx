import { createContext, useContext, useEffect, useState } from "react";
import {
  iContact,
  iContactContext,
  iContactContextProps,
  iContactUpdate,
  iContactUserCommon,
  iSearchForm,
} from "./@types";
import api from "../../services/api";
import { UserContext } from "../UserContext/UserContext";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as iContactContext);

const ContactProvider = ({ children }: iContactContextProps) => {
  const [contactModal, setContactModal] = useState(false);
  const [contactUser, setContactUser] = useState<iContact[] | null>(null);
  const { userData } = useContext(UserContext);
  const [search, setSearch] = useState<iSearchForm>();
  const [contactId, setContactId] = useState(0);

  const searchContact = contactUser?.filter((contact) => {
    return search === undefined
      ? true
      : contact.name.toLowerCase().includes(search.name.toLocaleLowerCase());
  });

  useEffect(() => {
    setSearch(undefined);
  }, [contactUser]);

  //lista todos contatos (admin)
  const contactsAllUsers = async () => {
    try {
      const response = await api.get<iContact[]>("/contacts");
      setContactUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //lista todos contatos (do usuário)
  const contactsUser = async () => {
    try {
      const response = await api.get<iContactUserCommon>(
        `/contacts/users/${userData?.sub}`
      );

      const { contacts } = response.data;
      setContactUser(contacts);
    } catch (error) {
      console.log(error);
    }
  };

  //criar contatos
  const createContacts = async (data: iContact) => {
    try {
      await api.post<iContact>("/contacts", data);
      toast.success("Registro criado com sucesso!");
      setContactModal(!contactModal);
      contactsUser();
    } catch (error) {
      console.log(error);
    }
  };

  //deletar contato;
  const deleteContacts = async (id: number) => {
    try {
      await api.delete(`/contacts/${id}`);
      toast.success("Contato deletado com sucesso!");
      contactsUser();
    } catch (error) {
      console.log(error);
    }
  };

  //atualizar contato;
  const updateContacts = async (data: iContactUpdate) => {
    try {
      await api.patch<iContact>(`/contacts/${contactId}`, data);
      toast.success("Contato atualizado com sucesso!");
      setContactModal(!contactModal);
      contactsUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contactsAllUsers,
        contactsUser,
        contactUser,
        contactModal,
        setContactModal,
        createContacts,
        searchContact,
        setSearch,
        deleteContacts,
        updateContacts,
        contactId,
        setContactId,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
