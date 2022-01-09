import { bindActionCreators } from 'redux';
import setQuery from "./actionCreators/setQuery";
import addTag from "./actionCreators/addTag";
import remTag from "./actionCreators/remTag";
import setTags from "./actionCreators/setTags";
import updateTag from "./actionCreators/updateTag";
import updateTagKey from "./actionCreators/updateTagKey";
import setCurrentTag from "./actionCreators/setCurrentTag";
import setTagsEditMode from "./actionCreators/setTagsEditMode";
import setTagsAddMode from "./actionCreators/setTagsAddMode";
import setTempTagKey from "./actionCreators/setTempTagKey";
import setResult from "./actionCreators/setResult";

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
                updateTagKey: bindActionCreators(updateTagKey, dispatch),
                setCurrentTag: bindActionCreators(setCurrentTag, dispatch),
                setTagsEditMode: bindActionCreators(setTagsEditMode, dispatch),
                setTagsAddMode: bindActionCreators(setTagsAddMode, dispatch),
                setTempTagKey: bindActionCreators(setTempTagKey, dispatch),
                setResult: bindActionCreators(setResult, dispatch)
            };
        };
        case "Tag": return function (dispatch) {
            return {
                updateTag: bindActionCreators(updateTag, dispatch),
                setCurrentTag: bindActionCreators(setCurrentTag, dispatch)
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;