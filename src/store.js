import { createStore } from 'redux';

/**
 * 'Store' is the term for where information is stored. The store is the
 * object that all of your application's state is stored in.
 * 
 * In order to set up Redux we need to do three things:
 *  1. Create a reducer function. Responsibility: change the state.
 *  2. Create 1+ actions. Responsibility: tell the reducer what to change.
 *  3. Connect actions + reducer to our components.
 */

export const buyArrrcoins = {
    type: 'BUY',
};

export const sellArrrcoins = {
    type: "SELL",
};

export const randomizeExchange = {
    type: "EXCHANGE",
};


// Set up reducer function
export function reducer (state, action) {
    if (action.type === 'BUY' && state.doubloons >= state.exchangeRate) {
        return {
             doubloons: state.doubloons - state.exchangeRate,
             arrrcoins: state.arrrcoins + 1,
             exchangeRate: state.exchangeRate
        };
    }
    else if (action.type === "SELL" && state.arrrcoins > 0) {
        return {
             doubloons: state.doubloons + state.exchangeRate,
             arrrcoins: state.arrrcoins - 1,
             exchangeRate: state.exchangeRate
        };
    } 
    else if (action.type === "EXCHANGE") {
       let newExchangeRate = Math.random() * (10 - 0) + 0;  
    
        return {
            doubloons: state.doubloons,
            arrrcoins: state.arrrcoins,
            exchangeRate: newExchangeRate,
        };
    }
    return state;
}



// Weave the reducer function and the initial state together into the actual 'store'
export const store = createStore (reducer, {
    //Declare initial state here:
    doubloons: 50,
    arrrcoins: 0,
    exchangeRate: 10,
});