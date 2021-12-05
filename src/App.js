import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactLIst";
import Filter from "./components/Filter";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {
    return (
      <div className='container'>
        <h1>PhoneBook</h1>
        <ContactForm/>
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
        <ToastContainer />
      </div>
    ) 
  };

export default App;


