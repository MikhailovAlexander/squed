import { combineReducers } from 'redux';
import tags from './tags';
import currentTag from "./currentTag";
import query from './query';
import queryModifier from "./queryModifier";
import tagsEditMode from "./tagsEditMode";
import tagsAddMode from "./tagsAddMode";
import tempTagKey from "./tempTagKey";
import result from "./result";
import dbList from "./dbList";
import currentDb from "./currentDb";
import resultIsLoading from "./resultIsLoading";
import resultHasError from "./resultHasError";
import resultError from "./resultError";

const reducers = combineReducers({
    queryModifier,
    tags,
    currentTag,
    tagsEditMode,
    tagsAddMode,
    tempTagKey,
    query,
    result,
    resultIsLoading,
    resultHasError,
    resultError,
    dbList,
    currentDb
});

export default reducers;