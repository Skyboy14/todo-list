import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../redux/reducers/index'; // Your root reducer

const persistConfig = {
    key: 'root',
    storage,
    // Add any additional configuration here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware()]; // Add any additional middleware

const store = configureStore({
    reducer: persistedReducer,
    middleware,
});

const persistor = persistStore(store);

export { store, persistor };
