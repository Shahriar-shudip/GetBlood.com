import React from "react";
import { Redirect, Route } from "react-router-dom";
import Axios from "axios";
import onClickOutside from "react-onclickoutside";

//import back from "./back.jpg";
import throttle from "lodash.throttle";
//import { subscribePush } from "./signup";
//import { subscribeUser } from './subscription';
// { messaging } from "./init-fcm";
//import { sendTokenToSever, push } from "./frontToBack";
import { bounceInLeft } from "react-animations";
import Radium from "radium";
import { StyleRoot } from "radium";
import home from "./home.png";
import "./login.css";
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
import MyVerticallyCenteredModal from "../Signup/signup";

 class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    let showSignup = false;
    let isLoggedIn =false;
    this.state = {
      name: "",
      email: "",
      password: "",
      userId: null,
      validEmail: true,
      userValid: true,
      loggedIn,
      showSignup,
      role: "",
      isLoggedIn,
    };
  }

  componentDidMount() {
    this.setState({isLoggedIn:this.props.isLoggedIn})

    
  }
  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  formSubmit = (ev) => {
    ev.preventDefault();
    const { name, email, password } = this.state;

    try {
      Axios({
        url: "http://localhost:9000/check/",
        method: "post",
        data: {
          // sending user email and password
          email: email,
          password: password,
        },
      }).then((response) => {
        // And the server sends back the user info
        // back to the client side
        console.log(response.data.user[0].role);
        this.setState({ role: response.data.user[0].role });
        console.log(JSON.stringify(response.data.user[0]))
        localStorage.setItem('outhId' , JSON.stringify(response.data.user[0]))

        // this.setState({ loggedIn:true,userId:response.data.userId[0].id});
        // }

        //  else {
        //   this.setState({userValid:false})
        //    localStorage.removeItem("token");
        //    this.setState({ loggedIn: false });
        //  }
      });
    } catch (err) {
      console.log("problem");
    }
  };
  handleClickOutside(evt) {
    evt.preventDefault()
    this.setState({isLoggedIn:false})
  }
  render() {
    if (this.state.role === "user") {
      return <Redirect to={{ pathname: "/map" }}></Redirect>;
    }

    const styles = {
      bounceInLeft: {
        animation: "y 2s",
        animationName: Radium.keyframes(bounceInLeft, "bounceInLeft"),
      },
    };

    return (
  
          
          <div >
            
            <div className="wrap-login100">
              <Form onSubmit={this.formSubmit}>
                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <br></br>

                <Form.Field inline>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <Label color="red" pointing="above">
                    invalid password
                  </Label>
                </Form.Field>
                <br></br>
              </Form>

              <Button inverted color="purple" onClick={this.formSubmit}>
                Login
              </Button>
              

              <Button
                inverted
                color="teal"
                type="submit"
                onClick={() => {
                  this.setState({ showSignup: true });
                }}
              >
                sign up ?
              </Button>

              <MyVerticallyCenteredModal
                show={this.state.showSignup}
                onHide={() => {
                  this.setState({ showSignup: false });
                }}
              />
            </div>
            </div>
       
       
      
    );
  }
}
export default onClickOutside(LoginModal);