import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios'
import './create.css'
import { bounceInLeft } from "react-animations";
import Radium from "radium";
import onClickOutside from "react-onclickoutside";
import { Redirect, Route } from "react-router-dom";
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
class CreatePost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            header:""
        }
    }
   
 render() {
     return (
         <div>
             <input 
             type="text"
             name="header"
             value={this.state.header}
             onChange={this.onChange}
             />
             
             
         </div>
     )
 }         
       
}
export default CreatePost