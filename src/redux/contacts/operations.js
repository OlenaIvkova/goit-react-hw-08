import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get('/contacts', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const response = await axios.post('/contacts', contact, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    await axios.delete(`/contacts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
