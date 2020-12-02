import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios'
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
class CreatePost extends React.Component{
    
    constructor(props){
        super(props)
        let blood = ''
        let header=''
        let description=''
        this.state = {
            blood:'',
            header:'',
            description:''
        }
    }
     
    handleChange = (ev)=>{
        this.setState({
            [ev.target.name]: ev.target.value,
          });
    }
    formSubmit=(e)=>{
        e.preventDefault()
        const user_id = localStorage.getItem('outhId')
        Axios({
            url: "http://localhost:9000/createPost/",
            method: "post",
            data: {
              // sending user email and password
              user_id:user_id.id,
              Blood_tag:this.state.blood,
              Header:this.state.header,
              description:this.state.description
            },
          }).then(e=>{
              localStorage.setItem('refresh','true')
          })
    }
    render(){
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                 asdfasf
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
            <Form onSubmit={this.formSubmit}>
                    <Form.Field inline>
                      <input
                        type="text"
                        placeholder="header"
                        name="header"
                        valeue={this.state.header}
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                    <br></br>
    
                    <Form.Field inline>
                      <input
                        type="text"
                        placeholder="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                    <br></br>
                    <Form.Field inline>
                      <input
                        type="text"
                        placeholder="Blood group"
                        name="blood"
                        value={this.state.blood}
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                  </Form>
            </div>
            </Modal.Body>
          </Modal>
          
        )
    }
  
}
export default CreatePost