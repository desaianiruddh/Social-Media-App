import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, userReducer)
const store = configureStore({
  reducer: {
    userData : persistedReducer
  },
})

export default store
export const persistor = persistStore(store)