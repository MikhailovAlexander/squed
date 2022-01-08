import { connect } from 'react-redux';
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import App from "../components/App";

const AppRedux = connect(mapStateToProps("App"), mapDispatchToProps("App"))(App);

export default AppRedux