import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://61a26152014e1900176de917.mockapi.io/' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
        query: () => `/contacts`,
        providesTags: ['Contacts'],
    }),
      deleteContact: builder.mutation({
          query: contactId => ({
              url: `/contacts/${contactId}`,
              method: 'DELETE'
          }),
          invalidatesTags: ['Contacts']
      }),
      createContact: builder.mutation({
          query: (contactName) => ({
              url: '/contacts',
              method: 'POST',
              body: {
                  name: contactName,
              }
          }),
          invalidatesTags: ['Contacts']
      })
  }),
})

export const { useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactsApi;