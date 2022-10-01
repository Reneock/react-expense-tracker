import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';

class AddExpense extends Component {
  constructor(props){
    super(props);
    this.state ={item:"", date:"", amount:"", category:""}
  }

  handleChange=(e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addExpense(this.state);
    this.setState({item:"", date:"", amount: "", category:""});
  };


  render() {
    return (

        <Form onSubmit={this.handleSubmit} style={{border:"1px solid #800000", backgroundColor: "#800000", color: "#fff", height: "450px", borderRadius:"5px"}}>
          <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Item/Service</strong></Form.Label>
            <Form.Control type="text" placeholder="Item or Service" value={this.state.item} name="item" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Date</strong></Form.Label>
            <Form.Control type="date" placeholder="Date Purchased" value={this.state.date} name="date" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicPassword">
            <Form.Label><strong>Amount ($)</strong></Form.Label>
            <Form.Control type="number" placeholder="Amount Paid" value={this.state.amount} name="amount" onChange={this.handleChange}/>
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

export default AddExpense;