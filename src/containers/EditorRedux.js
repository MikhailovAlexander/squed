import { connect } from 'react-redux';
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import Editor from 'react-simple-code-editor';

const EditorRedux = connect(mapStateToProps("Editor"), mapDispatchToProps("Editor"))(Editor);

export default EditorRedux;