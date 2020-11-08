import {React, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router';
import DonarSignup from './DonarSignup'
import { render } from '@testing-library/react';

export default class MyVerticallyCenteredModal extends React.Component {
  constructor(props){
     super(props)
     state ={
       donar:""
     }
  }
  d=()=>{
   this.setState({donor:true})
  }
   render() {
     if(donor){
      return <Redirect to={{pathname='/donarS'}}/>
     }
    return ( 
     
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose your role 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="outline-info">General user</Button>{'if you are searching for blood click here'}
        <br></br>
        <Button size='lg' variant="outline-danger"> Blood bank admin </Button>{' click to join as blood bank admin'}
        <br></br>
    <Button variant="outline-warning" onClick={donor}> Donor</Button>{' click to sign up as a donor'}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  }
    
  export default MyVerticallyCenteredModal;