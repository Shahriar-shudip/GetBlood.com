import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router';
import DonarSignup from './donarsignup/DonarSignup'
import { render } from '@testing-library/react';
import { Divider, Form, Label, Button, Checkbox} from "semantic-ui-react";
export default class usersignup extends React.Component {
  constructor(props){
     super(props)
     this.state ={
       donar:""
     }
  }
  
   render() {
     if(this.state.donor){
      return <Redirect to={{pathname:'/donarS'}}/>
     }
    return ( 
     
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
         <Form onSubmit={this.formSubmit}>
          <Form.Field>
            <input type="text" 
            placeholder="Full name" 
            name="name" 
            value={this.state.name}
            onChange={this.onChange} 
            autoFocus/>
            <Label pointing='above'>Please enter a value</Label>
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type="text" 
            placeholder="email" 
            name="email" 
            value={this.state.email}
            onChange={this.onChange} 
            autoFocus/>
            {label}
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type="text" 
            placeholder="bloodGroup" 
            name="bloodGroup" 
            value={this.state.bloodGroup}
            onChange={this.onChange} 
            autoFocus/>
           
          </Form.Field>
          <Divider />
 <Form.Field >
            
            <input type="text" 
            placeholder="phone" 
            name="phone" 
            value={this.state.phone}
            onChange={this.onChange} 
            autoFocus/>
           
          </Form.Field>
          
          <Divider />   
         <Form.Field >
            <input type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password}
            onChange={this.onChange} 
            autoFocus/>
            <Label pointing='below'>
              Your password must be 6 characters or more
            </Label>
          </Form.Field>
          <Divider /> 
          <Form.Field >
            <input type="password" 
            placeholder="confirm Password" 
            name="confirmpassword" 
            value={this.state.confirmpassword}
            onChange={this.onChange} 
            autoFocus/>
             <Label style={{ backgroudColor:'red'}} pointing='below'>
              Your password must be 6 characters or more
            </Label>
          </Form.Field>
        </Form>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  }
    
