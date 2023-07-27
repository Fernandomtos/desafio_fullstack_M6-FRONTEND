import { createContext } from "react";
import { iUserContextProps } from "./@types";

export const UserContext = createContext({});

const UserProvider = ({ children }: iUserContextProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserProvider;
