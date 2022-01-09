import SET_CURRENT_DB from "../actions/SET_CURRENT_DB";

function setCurrentDb(db){
    return{
        type: SET_CURRENT_DB,
        db: db
    };
}

export default setCurrentDb;