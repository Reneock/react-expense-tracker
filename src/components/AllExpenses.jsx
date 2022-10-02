import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Expense from './Expense';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
  return{
    expensesData: state.expenses,
  };
};

export default connect (mapStateToProps) (AllExpenses);