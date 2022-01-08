import SET_QUERY from "../actions/SET_QUERY";

function setQuery(query){
    return{
        type: SET_QUERY,
        query: query
    };
}

export default setQuery;