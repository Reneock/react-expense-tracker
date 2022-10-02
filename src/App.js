import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AllExpenses from './components/AllExpenses';
import AddExpense from './components/AddExpense';
import './App.css';

class App extends Component {

 render(){ 
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
             <AddExpense />
            </Col>
            <Col>
             <AllExpenses />
            </Col>
          </Row>
        </Container>
      </>
    );
  } 
}


export default App;
