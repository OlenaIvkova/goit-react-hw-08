import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    console.log('Отримані контакти:', data); 
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { getState, rejectWithValue }) => {
  try {
    const { token } = getState().auth;
    const response = await axios.post(`${BASE_URL}/contacts`, contact, {
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
    await axios.delete(`${BASE_URL}/contacts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});