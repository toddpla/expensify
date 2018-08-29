import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate}from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'New Laptop', amount: 2500, createdAt: 1000000}))
store.dispatch(addExpense({description: 'Hat', amount: 215, createdAt: 516}))
store.dispatch(addExpense({description: 'Water bill', amount: 487545, createdAt: 125}))
store.dispatch(addExpense({description: 'Travel', amount: 1254, createdAt: 12345}))
store.dispatch(addExpense({description: 'Lunch', amount: 2135, createdAt: 156165}))

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
