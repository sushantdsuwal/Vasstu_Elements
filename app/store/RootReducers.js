import { combineReducers } from 'redux';
import HomeReducer from './reducers/HomeReducer'

const rootReducer = combineReducers({
  HomeState: HomeReducer,
});

export default rootReducer;
