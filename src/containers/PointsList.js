import { connect } from "react-redux";
import About from "../components/about/About";

function mapStateToProps (state) {
    const {points} = state;
    return {points : points};
}

export default connect(
    mapStateToProps,
    null
)(About);