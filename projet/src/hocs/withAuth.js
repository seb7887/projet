import React from "react";
import { connect } from "react-redux";

const withAuth = ComponentToBeRendered => {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (this.props.isAuthenticated === false) {
        this.props.history.push("/signin");
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated === false) {
        this.props.history.push("/signin");
      }
    }

    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { isAuthenticated: state.currentUser.isAuthenticated };
  };

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
