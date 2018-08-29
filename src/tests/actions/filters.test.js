import moment from 'moment';
import { setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should setup setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should setup set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should setup set text filter action object', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  })
})

test('should setup set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should setup set sort by amount action object', () => {
  const action = setSortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})

test('should setup set sort by date action object', () => {
  const action = setSortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
})
