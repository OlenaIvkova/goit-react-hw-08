import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});


export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = (state) => {
  const filter = state.filters.name.toLowerCase();
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export default filtersSlice.reducer;

