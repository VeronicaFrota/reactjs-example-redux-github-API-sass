import { createStore } from 'redux';

import rootReducer from '../store/reducers/combineReducers';

const store = createStore(rootReducer);

export default store;