import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Expense from './Expense';

const AllExpenses = (props) => {
  return (
      <Container>
        <Row>
          {props.expensesData.map((expense) =>
           { return <Expense expenseInfo={expense} key={expense.id} deleteExpense={props.deleteExpense} editExpense={props.editExpense}/>}
           )
          }
        </Row>
      </Container>
  );
}

export default AllExpenses;