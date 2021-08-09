import reducer from './CurrChatReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    CurrChatReducer : reducer
});

export default reducers;