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

// Експортуємо редюсер
export const filtersReducer = filtersSlice.reducer;

// Експортуємо дії для фільтрації
export const { changeFilter } = filtersSlice.actions;

// Селектор для фільтра
export const selectNameFilter = state => state.filters.name;

// Селектор для фільтрованих контактів
export const selectFilteredContacts = (state) => {
  const filter = state.filters.name.toLowerCase();
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export default filtersSlice.reducer;

