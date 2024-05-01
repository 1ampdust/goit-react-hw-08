export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectError = (state) => state.auth.error;

export const selectIsLoading = (state) => state.auth.loading;

export const selectIsRegistered = (state) => state.auth.isRegistered;