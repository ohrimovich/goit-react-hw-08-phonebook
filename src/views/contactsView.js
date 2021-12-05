import ContactList from "../components/ContactLIst/ContactList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactsView() {
  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
}
