import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, { rejectWithValue }) => {
    try {
      const data = await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
