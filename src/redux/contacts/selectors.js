import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  (state) => state.filters.name,
  (state) => state.contacts.items,
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
export const selectContacts = (state) => state.contacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;