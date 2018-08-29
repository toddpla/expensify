import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: -1 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'rent',
    amount: 125.12,
    createdAt: 1000,
    note: ''
  }
  const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense})
  expect(state).toEqual([
    ...expenses,
    expense
  ])
})

test('should edit an expense', () => {
  const updates = { description: 'monthly rent' }
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  })
  expect(state[0].description).toBe('monthly rent')
})

test('should not edit any expense if id invalid', () => {
  const updates = { description: 'monthly rent' }
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  })
  expect(state).toEqual(expenses)
})
