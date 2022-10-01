import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AllExpenses from './components/AllExpenses';
import AddExpense from './components/AddExpense';
import './App.css';

class App extends Component {
 
 constructor(props) {
  super();
  this.state = { expenses: []}
}

 addNewExpense=(expense)=>{
  expense.id = Math.random().toString()
  this.setState({
    expenses: [...this.state.expenses,expense]
  })
 }

 deleteExpense = (id) => {
  let undeletedExpenses = this.state.expenses.filter((expense) => expense.id!== id);
  this.setState({
    expenses: undeletedExpenses
  })
 }

 editExpense = (id, updatedExpense) => {
  this.setState({
   expenses: this.state.expenses.map(expense => expense.id === id ? updatedExpense : expense)
  })
 }

 render(){ 
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
             <AddExpense addExpense ={this.addNewExpense}/>
            </Col>
            <Col>
             <AllExpenses expensesData={this.state.expenses} deleteExpense={this.deleteExpense} editExpense={this.editExpense}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  } 
}


export default App;
