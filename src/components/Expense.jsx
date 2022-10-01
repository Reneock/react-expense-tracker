import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditExpense from './EditExpense';

const Expense = (props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteExpense(props.expenseInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <EditExpense expenseInfo={props.expenseInfo} editExpense={props.editExpense} closeModal={handleClose}/> 
        </Modal.Body>
      </Modal>

      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ backgroundColor: "#a52a2a", color: "white" }}>
          <Card.Body>
            
            <Card.Title style={{ marginLeft: "60px", fontWeight: "800" }}> Expense</Card.Title>
            <Card.Text>
              <p> <strong>Item/Service:</strong> <br/>{props.expenseInfo.item}  </p>
              <p> <strong>Date:</strong> <br/>  {props.expenseInfo.date}  </p>
              <p> <strong>Amount ($):</strong> <br/> {props.expenseInfo.amount}  </p>
              <p> <strong>Category: </strong> <br/> {props.expenseInfo.category}  </p>
            </Card.Text>
            <Card.Link href="#">
              <Button style={{ width: "75px", marginLeft: "10px" }} href="#" variant="success" onClick={handleShow}>Edit</Button>
            </Card.Link>
            <Card.Link href="#">
              <Button style={{ marginLeft: "10px" }} href="#" variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Expense;