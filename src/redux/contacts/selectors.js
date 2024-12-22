import { createSelector } from 'reselect';


const selectContacts = (state) => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
// export const selectFilter = state => state.contacts.filter; 
const selectFilters = (state) => state.filters;



export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);