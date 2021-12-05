import { configureStore, getDefaultMiddleware, } from '@reduxjs/toolkit';
import filterReduser from './contacts/contacts-reduser';
import { contactsApi } from './contacts/contactsSlice';


export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReduser,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ]
})


