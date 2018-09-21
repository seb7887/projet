import React from "react";

import Header from "./Header";
import SearchBox from "./SearchBox";
import ProfileIcon from "./ProfileIcon";

const navStyles = {
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "6.5rem"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginRight: "1rem"
  }
};

class Navbar extends React.Component {
  render() {
    const { searchChange } = this.props;
    return (
      <div style={navStyles.header}>
        <Header />
        <div style={navStyles.buttons}>
          <SearchBox searchChange={searchChange.bind(this)} />
          <ProfileIcon />
        </div>
      </div>
    );
  }
}

export default Navbar;
