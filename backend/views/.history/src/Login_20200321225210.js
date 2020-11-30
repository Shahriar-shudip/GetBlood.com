import React from "react"
import { Redirect ,Route} from "react-router-dom"
import Axios from "axios"
import { Card, CardBody, Button, FormInput, CardHeader } from "shards-react"
import back from './back.jpg'
import throttle from 'lodash.throttle';
import {subscribePush} from './signup'
//import { subscribeUser } from './subscription';
import { messaging } from "./init-fcm";
import {sendTokenToSever,push} from './frontToBack'
import { bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import home from './home.png'
import './App.css'
export default class Login extends React.Component {

  constructor() {
    super()
    let loggedIn = false;
    
    this.state = {
      name: "",
      email: "",
      password: "",
      userId:null,
      validEmail:true,
      userValid:true,
      loggedIn,
      
    }
    
  }
  
  
  componentDidMount() {
   
    var token = null;
  
    messaging.requestPermission()
    .then(function() {
        

    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });
    messaging.usePublicVapidKey("BG1ADrSkecmEUxszVCuTHJO9DpPK0EZoeg3Nh5tfIIFDIeznVMHUsMzt_jqYBMP14uOTTBbdj4g-pXtjn-O39G4")
    messaging.getToken().then(current=>{
     localStorage.setItem("t456",current);
     sendTokenToSever(Math.floor(Math.random() * 100),current)
     push(current) 

     })
     messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      // ...
      const options = {
         body: payload.notification.body,
         icon: payload.notification.icon
      }
    
    });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    
}
  onChange = (ev) => {

    this.setState({
      [ev.target.name]: ev.target.value
    })
  }
 
    
  
  formSubmit = (ev) => {
    ev.preventDefault()
    const { name, email, password } = this.state

    try {
      Axios({
        url: 'http://localhost:9090/register/',
        method: 'post',
        data: {
          name: name,
          email: email,
          password: password
        }
      }).then(response => {
        if (response.data.user_exist) {
          localStorage.setItem("token","authenticated")
          this.setState({ loggedIn:true,userId:response.data.userId[0].id});
        }
       
         else {
          this.setState({userValid:false})
          localStorage.removeItem("token");
          this.setState({ loggedIn: false });
        }
      })
    } catch (err) {
      console.log('problem');
    }
  }

  render() {
    const styles = {
      bounceInLeft: {
        animation: 'y 2s',
        animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
      }
    }
    if (this.state.loggedIn === true) {
      this.setState({ loggedIn: false })
      return ( <Redirect to={{ pathname:'/dashboard' , state:{id:this.state.userId}}} />
      );
      }
     
      return (
        <div className="wrap">
            <StyleRoot>
              <div style={styles.bounceInLeft }>
              <div className="segment">
              
              <Card  >
               <div style={{borderRadius:'35px' ,backgroundColor:'#09e1ff',paddingTop:'50px',paddingBottom:"150px"}}>
               <CardHeader style={{ color:'white',marginLeft:'10px',fontSize:'50px',fontStyle: 'italic'}}>Login</CardHeader>
                <CardBody >
                  <form onSubmit={this.formSubmit}>
                  <FormInput style={{borderRadius:'8.5px', borderColor:"#046b85", backgroundColor:"rgb(0,0,0)"}}  type="text" placeholder="username" value={this.state.name} onChange={this.onChange} name="name" />
                  <br></br>
                  <FormInput style={{borderRadius:'8.5px', borderColor:"#046b85", backgroundColor:"rgb(0,0,0)"}}  type="text" placeholder="email" value={this.state.email} onChange={this.onChange} name="email" />
                  <br></br>
                  <FormInput style={{borderRadius:'8.5px', backgroundColor:"rgb(0,0,0)" ,borderColor:this.state.userValid?'#046b85':'red'}} type="password"   placeholder={this.state.userValid?"password":"invalid password"} value={this.state.password} onChange={this.onChange} name="password" />
                  <br></br>
                  <Button type="submit" pill theme="danger" onClick={this.formSubmit}>
                    Login
                  </Button>
                  </form>
               </CardBody>
                </div> 
              </Card>
             
              </div> 
              </div>   
            </StyleRoot>
           
       </div>
      )
    }}
  
