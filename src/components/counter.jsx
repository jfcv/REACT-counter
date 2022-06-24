import React, { Component } from "react";

class Counter extends React.Component {
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

  /**
   * this method is called after a component is updated
   * which means we have new state or new props
   * so we can compare them with the old state or
   * old props
   * and if there's a CHANGE we can a make
   * an AJAX request to get new data from the server
   */
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //AJAX call to get new data from the server
    }
  }

  /**
   * this method is called just before the
   * component is removed from the DOM
   */
  componentWillUnmount() {
    console.log("Counter - Unmount");
    /**
     * generally this is where we can clean up
     * the application (timers, listeners)
     * otherwise we'll end up with memory leaks
     */
  }

  render() {
    console.log("Counter - Rendered");

    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-info btn-sm"
          >
            +
          </button>

          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-info btn-sm m-2"
            disabled={this.formatDecrementButton()}
          >
            -
          </button>

          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  /**
   * conditional rendering
   */
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  formatDecrementButton() {
    const { value } = this.props.counter;
    return value === 0;
  }

  /**
   * arrow functions inherit [ this ] keyword
   */

  /**
   * Array.map
   */
  /*
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
  */
}

export default Counter;
