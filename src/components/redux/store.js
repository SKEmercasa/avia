import { configureStore } from '@reduxjs/toolkit';

import reducerMenuFilter from './reducerMenuFilter';
import reducerNavSlice from './reducerNavSlice';
import reducerGetData from './reducerGetData';

export const store = configureStore({
  reducer: { menu: reducerMenuFilter, nav: reducerNavSlice, getData: reducerGetData },
});

window.store = store;
