import { createContext, useContext, useState } from "react";
import {
  iContact,
  iContactContext,
  iContactContextProps,
  iContactUserCommon,
} from "./@types";
import api from "../../services/api";
import { UserContext } from "../UserContext/UserContext";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as iContactContext);

const ContactProvider = ({ children }: iContactContextProps) => {
  const [contactModal, setContactModal] = useState(false);
  const [contactUser, setContactUser] = useState<iContact[] | null>([]);
  const { userData } = useContext(UserContext);

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
        `/contacts/users/${userData?.id}`
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
      await api.post<iContact>(`/contacts`, data);
      toast.success("Registro criado com sucesso!");
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
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
