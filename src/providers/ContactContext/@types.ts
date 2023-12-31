export interface iContactContextProps {
  children: React.ReactNode;
}

export interface iContact {
  id?: number;
  name: string;
  email: string;
  fone: string;
  createdAt?: Date;
  deletedAt?: Date | string | null | undefined;
}

export interface iContactUpdate {
  name?: string;
  email?: string;
  fone?: string;
}

export interface iContactUserCommon {
  id: number;
  name: string;
  email: string;
  fone: string;
  contacts: iContact[] | null;
  // contacts: iContactUser[] | null;
}

export interface iSearchForm {
  name: string;
}

export interface iContactContext {
  contactsAllUsers: () => Promise<void>;
  contactsUser: () => Promise<void>;
  contactUser: iContact[] | null;
  updateContacts: (data: iContactUpdate) => Promise<void>;
  contactModal: boolean;
  setContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  createContacts: (data: iContact) => Promise<void>;
  searchContact: iContact[] | undefined;
  setSearch: React.Dispatch<React.SetStateAction<iSearchForm | undefined>>;
  deleteContacts: (id: number) => Promise<void>;
  contactId: number;
  setContactId: React.Dispatch<React.SetStateAction<number>>;
}
