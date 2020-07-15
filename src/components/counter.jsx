import React, { Component } from "react";

class Counter extends Component {

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  render() {
    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.props.onIncrement(this.props.counter)}
          className="btn rounded btn-secondary m-2 btn-sm"
        >
          +
        </button>
        <button
          onClick={ () => this.props.onDecrement(this.props.counter)}
          className="btn rounded btn-secondary m-2 btn-sm"
        >
          -
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    ); 
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  getBadgesClasses() {
    let classes = "badges rounded m-2 p-1 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const {value}  = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
