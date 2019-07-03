import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage,
    blacklist: ['HomeState'],
    whiteList: [],
};

const reducer = persistReducer(config, RootReducer);
const middleware = applyMiddleware(thunk);

export default (data) => {
    const store = createStore(reducer, data, middleware);
    const persistor = persistStore(store);
    return { persistor, store };
};