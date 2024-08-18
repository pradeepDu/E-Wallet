import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  currentAccount: '',
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { setTransactions, setCurrentAccount } = transactionsSlice.actions;
export default transactionsSlice.reducer;
