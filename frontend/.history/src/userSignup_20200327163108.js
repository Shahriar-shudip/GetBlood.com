import React from "react";
import { Redirect, Route } from "react-router-dom";
import Axios from "axios";
import { Divider, Form, Label, Button, Checkbox} from "semantic-ui-react";
import { subscribePush } from "./signup";
//import { subscribeUser } from './subscription';
import { messaging } from "./init-fcm";
import { sendTokenToSever, push } from "./frontToBack";
import { bounceInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

import "./donar.css";
export default class DonarSignup extends React.Component {
  constructor() {
    super();
    let loggedIn = false;
    let showSignup = false;
   
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      bloodGroup:"",
      token:"",
      phone:"",
      userId: null,
      checked:false,
      validEmail:"",
      notification_granted:""
    };
  }

  componentDidMount() {
      this.setState({checked:false,notification_granted:false})
      
  }

  onChange = ev => {

    this.setState({
      [ev.target.name]: ev.target.value
    });
    this.validEmail();
    this.passValid();
  };

  formSubmit = ev => {
    ev.preventDefault();
    const { name, email, password ,token,bloodGroup,phone} = this.state;
    console.log(bloodGroup)
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(token)
    try {
      Axios({
        url: "http://localhost:9000/registerUser",
        method: "post",
        data: {
          name: name,
          email: email,
          password: password,
          bloodGroup:bloodGroup,
          token:token,
          phone:phone
        }
      }).then(response => {
        if (response.data.user_exist) {
          localStorage.setItem("token", "authenticated");
          this.setState({
            loggedIn: true,
            userId: response.data.userId[0].id
          });
        } else {
          this.setState({ userValid: false });
          localStorage.removeItem("token");
          this.setState({ loggedIn: false });
        }
      });
    } catch (err) {
      console.log("problem");
    }
  };


  emailIsUsed=()=>{
    const {email} =this.state
    try {
      Axios({
        url: "http://localhost:9000/validEmail",
        method: "post",
        data: {          
          email: email,
        }
      }).then(response => {
         console.log(response)
        } 
      );
    } catch (err) {
      console.log("problem");
    }
  }
  validEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)){
      this.setState({validEmail:true})
    }
    else{
       this.setState({validEmail:false})
    }
  }
  passValid=()=>{
    if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.password)){
      return true;
    }else{
      return false;
    }
  }
  render() {
    const styles = {
      bounceInLeft: {
        animation: "y 2s",
        animationName: Radium.keyframes(bounceInLeft, "bounceInLeft")
      }
    };
    if (this.state.loggedIn === true) {
      this.setState({ loggedIn: false });
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { id: this.state.userId }
          }}
        />
      );
    }
    let label
    let passlabel
    
    if(!this.passValid){
       passlabel=<Label color='red' pointing='above'> Password must be at least 4 characters, 
                                                     no more than 8 characters,
                                                     and must include at least one upper case letter,
                                                     one lower case letter, and one numeric digit</Label>

    }
    if(this.state.validEmail){
      label= <Label color='green' pointing='left'>valid</Label>
    }
    if(!this.state.validEmail && this.state.validEmail.length!==0){
      label=<Label color='red' pointing='left'>invalid email</Label>
    }
    if(this.state.validEmail.length===0)
    {
      label =<Label color='violet' pointing='left'> * Required field</Label>
    }
    return (
      <div className="donar-wrap">
      <div className="donar-signup">
        <Form onSubmit={this.formSubmit}>
          <Form.Field>
            <input type="text" 
            placeholder="Full name" 
            name="name" 
            value={this.state.name}
            onChange={this.onChange} 
            autoFocus/>
            
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
            {passlabel}
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
        <Divider />
         <Button inverted color="teal" onClick={this.formSubmit}>
          submit
        </Button>
      </div>
      </div>
    );
  }
}
