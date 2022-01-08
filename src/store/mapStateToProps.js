import tagsAddMode from "./reducers/tagsAddMode";
import tempTagKey from "./reducers/tempTagKey";

function mapStateToProps(component) {
    switch (component) {
        case "App": {
            return function (state) {
                return {
                    queryModifier: state.queryModifier,
                    tags: state.tags,
                    query: state.query
                };
            }
        }
        case "TagControls": {
            return function (state) {
                return {
                    queryModifier: state.queryModifier,
                    tags: state.tags,
                    currentTag: state.currentTag,
                    tagsEditMode: state.tagsEditMode,
                    tagsAddMode: state.tagsAddMode,
                    tempTagKey: state.tempTagKey,
                    query: state.query
                };
            }
        }
        case "Tag": {
            return function (state) {
                return {
                    tags: state.tags,
                    currentTag: state.currentTag,
                    tagsEditMode: state.tagsEditMode,
                    tagsAddMode: state.tagsAddMode,
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;