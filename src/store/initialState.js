import QueryModifier from '../QueryModifier';
const queryModifier = new QueryModifier();
const initTags = queryModifier.tagsSample;
const initQuery = queryModifier.querySample;

const initialState = {
    queryModifier: queryModifier,
    tags: initTags,
    query: initQuery
};

export default initialState;