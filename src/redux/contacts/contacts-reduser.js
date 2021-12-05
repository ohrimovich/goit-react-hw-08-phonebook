import { createReducer } from '@reduxjs/toolkit'
import actions from './contacts-actions'

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload
})

export default filter;
