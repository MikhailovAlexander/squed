import { bindActionCreators } from 'redux';
import setQuery from "./actionCreators/setQuery";
import addTag from "./actionCreators/addTag";
import remTag from "./actionCreators/remTag";
import setTags from "./actionCreators/setTags";
import updateTag from "./actionCreators/updateTag";
import updateTagKey from "./actionCreators/updateTagKey";

function mapDispatchToProps(component) {
    switch (component) {
        case "App": return function (dispatch) {
            return {
                setQuery: bindActionCreators(setQuery, dispatch)
            };
        };
        case "TagControls": return function (dispatch) {
            return {
                addTag: bindActionCreators(addTag, dispatch),
                remTag: bindActionCreators(remTag, dispatch),
                setTags: bindActionCreators(setTags, dispatch),
                updateTagKey: bindActionCreators(updateTagKey, dispatch)
            };
        };
        case "Tag": return function (dispatch) {
            return {
                updateTag: bindActionCreators(updateTag, dispatch),
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;