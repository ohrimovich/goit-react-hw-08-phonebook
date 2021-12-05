import React, { useState, useEffect } from "react";
import { connect} from "react-redux";
import s from './ContactList.module.scss';
import Loader from "react-loader-spinner";
import {ContactsListItem} from '../ContactsListItem/ContactsListItem'
import { useFetchContactsQuery} from '../../redux/contacts/contactsSlice';


function ContactList({filter}) {
    
    const { data, isFetching } = useFetchContactsQuery();
    const [contacts, setContacts] = useState([]);
    const [contactsList, setContastsList] = useState([]);

    useEffect(() => {
        setContacts(data);
        setContastsList(data);
    }, [data]);

    useEffect(() => {
        const filteredContactList = getFilteredContactList(contactsList, filter);
        setContacts(filteredContactList);
    }, [filter])

    const getFilteredContactList = (allContacts, filterValue) => {
            return allContacts.filter(
      contact => contact.name.toLocaleLowerCase()
        .includes(filterValue.toLocaleLowerCase())
    )
  } 
    return (
        <>
            {isFetching && <div className={s.loader} ><Loader type="TailSpin"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    timeout={20000}
                    /></div>}
        <ul className={s.list}>
                {contacts && contacts.map(contact => (<ContactsListItem key={contact.id} {...contact}/>)
                
                )}
            </ul>
        </>    
    )
}

const mapStateToProps = ({filter}) => ({
    filter: filter
})

export default connect(mapStateToProps)(ContactList);