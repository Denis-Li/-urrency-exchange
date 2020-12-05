import { connect } from "react-redux";
import List from "../components/list/List";

function mapStateToProps (state) {
    const {points} = state;
    return {points : points};
}

export default connect(
    mapStateToProps,
    null
)(List);