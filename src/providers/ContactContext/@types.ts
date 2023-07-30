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

export interface iContactUserCommon {
  id: number;
  name: string;
  email: string;
  fone: string;
  contacts: iContact[] | null;
  // contacts: iContactUser[] | null;
}

export interface iContactContext {
  contactsAllUsers: () => Promise<void>;
  contactsUser: () => Promise<void>;
  // contact: iContact[] | null;
  contactUser: iContact[] | null;
  // contactUser: iContactUser[] | null;
  contactModal: boolean;
  setContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  createContacts: (data: iContact) => Promise<void>;
}
