import { combineReducers } from 'redux';
import tags from './tags';
import query from './query';
import queryModifier from "./queryModifier";

const reducers = combineReducers({
    queryModifier,
    tags,
    query
});

export default reducers;