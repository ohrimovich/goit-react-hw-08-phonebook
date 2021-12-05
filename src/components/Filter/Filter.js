import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from './Filter.module.scss'
import contactsActions from "../../redux/contacts/contacts-actions";

function Filter({onChange}) {
    const handlerChange = e => {
        const filteredValue = e.currentTarget.value;
        onChange(filteredValue);
    }
    return (
        <label className={s.label}>
            Find contact by name
            <input className={s.input} type="text" autoComplete="off"
                onChange={handlerChange} />
        </label>
    )  
}

Filter.propTypes = {
   handlerChange: PropTypes.func
}

const mapDispatchToProps = dispatch =>  ({
    onChange: (filteredValue) => dispatch(contactsActions.changeFilter(filteredValue))
})

export default connect(null,mapDispatchToProps)(Filter)