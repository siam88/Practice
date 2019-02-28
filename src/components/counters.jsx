import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../store/action.jsx";
class Counter extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.cnt}</h3>
        <button onClick={this.props.onIncrease}>increase</button>
        <button onClick={this.props.onDecrease}>decrease</button>
        <hr />
        <h3>{this.props.cnt2}</h3>
        <button onClick={this.props.onIncrease2}>increase2</button>
        <button onClick={this.props.onDecrease2}>decrease2</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cnt: state.counterReducer.counter,
    cnt2: state.secondReducer.counter2
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrease: () => dispatch({ type: actionType.INCREASE, value: 4 }),
    onDecrease: () => dispatch({ type: actionType.DECREASE }),
    onIncrease2: () => dispatch({ type: actionType.INCREASE2, value: 10 }),
    onDecrease2: () => dispatch({ type: actionType.DECREASE2 })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
