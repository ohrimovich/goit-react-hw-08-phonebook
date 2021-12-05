import { deleteContacts } from "../../redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { getIsDeleting } from "../../redux/contacts/contacts-selectors";
import s from "./ContactsListItem.module.scss";

export const ContactsListItem = ({ name, id, number }) => {
  const isDeleting = useSelector(getIsDeleting);
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <span className={s.name}>{name}</span>:
      <span className={s.number}>{number}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
};
