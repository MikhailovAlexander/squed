import { connect } from 'react-redux';
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import Result from "../components/Result";

const ResultRedux = connect(mapStateToProps("Result"), mapDispatchToProps("Result"))(Result);

export default ResultRedux