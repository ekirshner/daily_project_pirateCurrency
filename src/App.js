import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import the reducer and actions from 'store'
import { buyArrrcoins, sellArrrcoins, randomizeExchange, reducer } from './store';

//Use this to connect redux and react
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props)
                // make sure to use the mapActionsToProps key here
    setInterval(this.props.exchange, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pirate Currency Exchange</h2>
        </div>
       <div className="doubloons-container">
         <h2>Doubloons</h2>
         <p> { this.props.doubloons } </p>
        </div>
        <div className="arrrcoins-container">
         <h2>Arrrcoins</h2>
         <p> { this.props.arrrcoins } </p>
        </div>
        <p> Current Exchange Rate:  { this.props.exchangeRate } </p>
        <button onClick={() => this.props.buy()}> Buy Arrrcoins </button>
        <button onClick={() => this.props.sell()}> Sell Arrrcoins </button>
      </div>
    );
  }
}


// Two things that need to be connected:
//    1. How to read from the state (get info out)
//    2. How to send actions to the state (put info in)

function mapStateToProps (state) {
  //find out from Luke if stuff goes here......
  return state;
}


// 'dispatch' -built-in redux function- sends specified action to reducer function

function mapActionsToProps (dispatch) {

  return {
    buy: function () {
      dispatch(buyArrrcoins);
    },
    sell: function () {
      dispatch(sellArrrcoins);
    },
    exchange: function () {
      dispatch(randomizeExchange);
    },
  };
}


export default connect (mapStateToProps, mapActionsToProps) (App);
