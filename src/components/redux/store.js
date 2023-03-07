import { configureStore } from '@reduxjs/toolkit';

import reducerClickFilter from './reducer-click-filter';

export const store = configureStore({
  reducer: reducerClickFilter,
});

window.store = store;
