import { connect } from 'react-redux';
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import DbControls from "../components/DbControls";

const DbControlsRedux = connect(mapStateToProps("DbControls"), mapDispatchToProps("DbControls"))(DbControls);

export default DbControlsRedux