import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import s from './ContactsListItem.module.scss'

export const ContactsListItem = ({name, id, number}) => {
    const [deleteContact, {isLoading}] = useDeleteContactMutation();
    
    return (
     <li className={s.item}><span className={s.name}>{name}</span>:<span className={s.number}>{number}</span> 
            <button className={s.button} type='button' onClick={() => deleteContact(id)} disabled={isLoading}>{isLoading ? 'Deleting...' : 'Delete' }</button></li>
    )
}