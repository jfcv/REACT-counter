import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  /**
   * you would have to re-bind every even-handler manually
   * if using this approach
   */

  /*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-info btn-sm">
          Increment
        </button>
      </div>
    );
  }

  /**
   * arrow functions inherit [ this ] keyword
   */
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /**
   * Array.map
   */
  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>There are no tags!</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  /**
   * conditional rendering
   */
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
