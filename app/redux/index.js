// store.js
import { configureStore } from '@reduxjs/toolkit';
import devToolsEnhancer from 'remote-redux-devtools';
import folderReducer from './reducer/folders.reducer';
const store = configureStore({
  reducer: {
    folders: folderReducer,
  },
  devTools: [devToolsEnhancer({ realtime: true })],
});

export default store;
