import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <div>
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts yet</p>
      )}
    </div>
  );
};

export default ContactList;
