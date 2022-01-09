import SET_DB_LIST from "../actions/SET_DB_LIST";

function setDbList(dbList){
    return{
        type: SET_DB_LIST,
        dbList: dbList
    };
}

export default setDbList;