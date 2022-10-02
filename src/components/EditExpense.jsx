import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { editExpense } from "../actions/expensesActions";

class EditExpense extends Component {
  constructor(props){
    super(props);
    this.state ={item: props.expenseInfo.item,
     date: props.expenseInfo.date,
     amount: props.expenseInfo.amount,
     category: props.expenseInfo.category,
     id:props.expenseInfo.id
    }
  }

  handleChange=(e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.editExpense({id: this.state.id, item: this.state.item, date: this.state.date, amount: this.state.amount, category: this.state.category,});
    this.setState({item:"", date:"", amount: "", category:""});
    this.props.closeModal();
  };


  render() {
    return (

        <Form onSubmit={this.handleSubmit} style={{border:"1px solid #800000", backgroundColor: "#800000", color: "#fff", height: "450px", borderRadius:"5px"}}>
          <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Item/Service</Form.Label>
            <Form.Control type="text" placeholder="Item or Service" value={this.state.item} name="item" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date Purchased" value={this.state.date} name="date" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Amount ($)</Form.Label>
            <Form.Control type="amount" placeholder=" Amount Paid" value={this.state.amount} name="amount" onChange={this.handleChange} /> 
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Category</strong></Form.Label> 
            <Form.Select aria-label="Select Category" type="text" placeholder="Select Category" value={this.state.category} name="category" onChange={this.handleChange}>
              <option>Select Category</option>
              <option>Food</option>
              <option>Drink</option>
              <option>Accomodation</option>
              <option>Transportation</option>
              <option>Housing</option>
              <option>Rent</option>
              <option>Miscellaneous</option>
            </Form.Select>
          </Form.Group>
          
          <Button style={{marginTop:"15px", marginLeft: "150px", width: "100px"}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
  }
}

const mapDispatchToProps = {
  editExpense,
}

export default connect (null, mapDispatchToProps) (EditExpense);