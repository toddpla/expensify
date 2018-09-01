import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={1123}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with 0 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={1123}/>);
  expect(wrapper).toMatchSnapshot();
});
