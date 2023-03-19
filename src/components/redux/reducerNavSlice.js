import { createSlice } from '@reduxjs/toolkit';

const reducerNavSlice = createSlice({
  name: 'nav',
  initialState: {
    buttonFlag: [false, false, false],
  },
  reducers: {
    add(state, action) {
      let temp = state.buttonFlag.fill(false);
      state.buttonFlag = temp.map((el, i) => (action.payload == i ? !el : el));
    },
  },
});

export const { add } = reducerNavSlice.actions;

export default reducerNavSlice.reducer;
