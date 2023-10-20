import { useContext } from "react";
import { SyledCard } from "./styles";
import { BsTrash } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import { iUser } from "../../providers/UserContext/@types";

interface iUserProps {
  user: iUser;
}

export const CardUsers = ({ user }: iUserProps) => {
  const { contactModal, setContactModal } = useContext(ContactContext);
const { setBtnInfo, deleteUser, setUserId, readUser } = useContext(UserContext);

  const idUser: number = user.id!;
 
  return (
    <SyledCard>
      <p>ref. {user.id}</p>
      <h2>Nome: {user.name}</h2>
      <p>E-mail: {user.email}</p>
      <p>Telefone: {user.fone}</p>
      <p>Criado em: {user.createdAt}</p>
      <p>Tipo de Conta:</p>
      <div>
          <div className="infoUser">
            <p>Usuário</p>
            {user.admin === "userCommon" ? <p>X</p> : ""}
          </div>
          <div className="infoUser">
            <p>Administrador</p>
            {user.admin === "admin" ? <p>X</p> : ""}
          </div>
      </div>
      
      <div className="btnContact">
        <button onClick={() => deleteUser(idUser)}>
          <BsTrash size={25} />
        </button>
        <button
          onClick={async () => {
            await readUser(idUser);
            setUserId(idUser);
            setBtnInfo("editarUser");
            setContactModal(!contactModal);
          }}
        >
          <FaUserEdit size={25} />
        </button>
      </div>
    </SyledCard>
  );
};
