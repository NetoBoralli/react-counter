import React from 'react';
// import Counter from './counter';


// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());
const Counter = ({ counter, increment, decrement }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

// class CounterContainer extends React.Component {
//   // constructor() {
//   //   super();

//   //   // this.increment = this.increment.bind(this);
//   //   // this.decrement = this.decrement.bind(this);
//   // }

//   // componentDidMount() {
//   //   this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//   // }

//   // componentWillUnmount() {
//   //   this.unsubscribe();
//   // }



//   render() {
//     return (
//       <Counter
//         counter={this.props.counter}
//         increment={this.props.increment}
//         decrement={this.props.decrement}
//       />
//     )
//   }

// }



export default Counter;