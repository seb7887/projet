import React from "react";

class SearchBox extends React.Component {
  handleChange = e => {
    this.props.searchChange(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <input
          aria-label="Search"
          type="search"
          onChange={this.handleChange}
          className="search__text"
        />
        <span />
      </div>
    );
  }
}

export default SearchBox;
