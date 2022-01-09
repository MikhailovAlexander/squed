import QueryModifier from '../QueryModifier';
const queryModifier = new QueryModifier();
const initTags = queryModifier.tagsSample;
const initQuery = queryModifier.querySample;

const initialState = {
    queryModifier: queryModifier,
    tags: initTags,
    currentTag: null,
    tagsEditMode: false,
    tagsAddMode: false,
    tempTagKey: "",
    query: initQuery,
    result: {
        label: "Результат выполнения запроса",
        header: [],
        values: []
    },
    dbList: ["SqlServer", "PostgreSql"],
    currentDb: null
};

export default initialState;