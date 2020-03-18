import { connect } from "react-redux";
import { receiveCurrentUser } from "../../actions/session_actions";
import MainPage from "./main_page";

const mapStateToProps = state => {
  return {
    // currentUserName: state.currentUser.fName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);