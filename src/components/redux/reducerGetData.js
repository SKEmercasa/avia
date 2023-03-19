import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getKey, getDataCard } from '../../assets/api/axios';

export const getSearchId = createAsyncThunk('getData/getSearchId', async () => {
  return await getKey();
});

export const getCard = createAsyncThunk('getData/getDataCard', async (id, { rejectWithValue }) => {
  try {
    return await getDataCard(id);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const reducerGetData = createSlice({
  name: 'getData',
  initialState: {
    searchId: null,
    data: [],
    stop: false,
    status: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload.searchId;
      state.status = true;
    });
    builder.addCase(getCard.fulfilled, (state, action) => {
      state.data.push(...action.payload.tickets);
      state.stop = action.payload.stop;
      state.status = !state.status;
    });
    builder.addCase(getCard.rejected, (state, action) => {
      state.error = action.payload;
      state.status = !state.status;
    });
  },
});

export default reducerGetData.reducer;
