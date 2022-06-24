import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, onIncrement, onDecrement, onDelete, counters } =
      this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
