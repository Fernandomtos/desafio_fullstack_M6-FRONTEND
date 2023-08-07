import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { StyledCardsUl, StyledContainer } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";
import { MenuUser } from "../../components/MenuUser";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import Footer from "../../components/Footer";
import { CardContact } from "../../components/CardContact";
import { ModalContact } from "../../components/ModalContact";
import { MenuAdm } from "../../components/MenuAdm";
import { CardUsers } from "../../components/CardUsers";

const Dashboard = () => {
  const { searchContact, contactsUser, contactModal } =
    useContext(ContactContext);
  const { userData, btnInfo, listUsers } = useContext(UserContext);

  useEffect(() => {
    contactsUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const time = new Date().toLocaleTimeString();
  let period = "";

  if (time >= "12:00:00" && time < "18:00:00") {
    period = "Boa Tarde";
  } else if (time >= "18:00:00" && time < "23:59:59") {
    period = "Boa Noite";
  } else {
    period = "Bom Dia";
  }

  return (
    <>
      {contactModal && <ModalContact />}
      <Header />
      <StyledContainer>
        <h2>
          {period}, {userData?.name}!
        </h2>
        <div>
          <aside>
            <MenuUser />
            {userData?.admin === true ? <MenuAdm /> : null}
          </aside>
          <section>
            {btnInfo == "listarUsuarios" ? (
              <StyledCardsUl>
                {listUsers?.map((user) => (
                  <CardUsers key={user.id} user={user} />
                ))}
              </StyledCardsUl>
            ) : (
              <StyledCardsUl>
                {searchContact?.length == 0 ? (
                  <h2>Contato não encontrado...</h2>
                ) : null}
                {searchContact?.map((contact) => (
                  <CardContact key={contact.id} contact={contact} />
                ))}
              </StyledCardsUl>
            )}
          </section>
        </div>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Dashboard;
