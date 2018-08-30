import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

numeral.locale('en-gb');

const ExpenseListItem = ({history, dispatch, id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{numeral(amount / 100).format('$0,0')}
      -
      {moment(createdAt).format('MMMM Do YYYY')}</p>
  </div>
)

export default ExpenseListItem;
