import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";


// export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.search;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);