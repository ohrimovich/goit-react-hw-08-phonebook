import React from "react";
import { useState, useEffect} from "react";
import s from './ContactForm.module.scss';
import { toast } from 'react-toastify'
import Loader from "react-loader-spinner";
import {useFetchContactsQuery,useCreateContactMutation} from '../../redux/contacts/contactsSlice'

function ContactForm() {
    const [contactName, setContactname] = useState('');
    const [number, setNumber] = useState('');
    const [createContact, { isLoading}] = useCreateContactMutation();
    const { data} = useFetchContactsQuery();
    const [contacts, setContacts] = useState([]);

       useEffect(() => {
        setContacts(data);
    }, [data]);
 
    const findContact = () => {
     return contacts.find((contact) => contact.name === contactName)
    }
    
    const handlerChange = e => {
        const { value } = e.currentTarget;
        switch (e.currentTarget.name) {
            case 'name': setContactname(value);
                break
            case 'number': setNumber(value);
                break;
            default: return;
        }        
    };

   const  reset = () => {
        setContactname('');
        setNumber('');
    }
    
    const handlerSubmit = e => {
        e.preventDefault();
        if (findContact()) {
               toast.error( contactName + ' is already in contacts' )
            return;
        }
        createContact(contactName);
        toast.success(contactName + 'added successfully to address book', {autoClose: 2000})
        reset();
    }
        return (
            <form className={s.form} onSubmit={handlerSubmit}>
                <label className={s.label}>
                    Name
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={contactName}
                        onChange={handlerChange}
                        autoComplete="off"
                    />
                </label>
                <label className={s.label}>
                    Number
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={handlerChange}
                        autoComplete="off"
                    />
                </label>
                <button type='submit' className={s.button} disabled={isLoading}>Add contact
                {isLoading && <Loader type="TailSpin"
                    color="#00BFFF"
                    height={12}
                    width={12}
                    timeout={20000}
                    /> }
                </button>
            </form>
        )
    }


export default ContactForm;
