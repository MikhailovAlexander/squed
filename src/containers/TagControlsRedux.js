import { connect } from 'react-redux';
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import TagControls from "../components/TagControls";

const TagControlsRedux = connect(mapStateToProps("TagControls"), mapDispatchToProps("TagControls"))(TagControls);

export default TagControlsRedux