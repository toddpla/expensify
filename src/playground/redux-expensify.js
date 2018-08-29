import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt
  }
});

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const editExpense = ({id, updates} = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const setSortByDate = () => ({
  type: 'SET_SORT_BY_DATE',
});

const setSortByAmount = () => ({
  type: 'SET_SORT_BY_AMOUNT',
});

const setStartDate = (startDate = '') => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate = '') => ({
  type: 'SET_END_DATE',
  endDate
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      })
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: '100', createdAt: -10000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: '300',  createdAt: -1000}));

// store.dispatch(setStartDate(125));
// store.dispatch(setTextFilter('re'))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense({amount: 500, id: expenseTwo.expense.id}))
//
// store.dispatch(setTextFilter({text: 'rent'}));
// store.dispatch(setTextFilter());
//
store.dispatch(setSortByAmount());
// store.dispatch(setSortByDate());
//
// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(150));
// store.dispatch(setEndDate());
