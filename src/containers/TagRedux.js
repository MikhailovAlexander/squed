import { connect } from 'react-redux';
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import Tag from "../components/Tag";

const TagRedux = connect(mapStateToProps("Tag"), mapDispatchToProps("Tag"))(Tag);

export default TagRedux