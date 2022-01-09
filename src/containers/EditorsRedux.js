import { connect } from 'react-redux';
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import Editors from "../components/Editors";

const EditorsRedux = connect(mapStateToProps("Editors"), mapDispatchToProps("Editors"))(Editors);

export default EditorsRedux