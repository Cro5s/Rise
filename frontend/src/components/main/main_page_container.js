import { connect } from "react-redux";
import { receiveCurrentUser } from "../../actions/session_actions";
import MainPage from "./main_page";

const mapStateToProps = state => {
  if (state.session.user) {
    return {
      currentUserName: state.session.user.fName,   
      currentUser: state.session.user,
    };
  } else {
    return {
      currentUser: state.session.user,
    };
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);