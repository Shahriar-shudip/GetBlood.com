import React from "react";
import { Redirect, Route } from "react-router-dom";
import Axios from "axios";

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
import MyVerticallyCenteredModal from "./signup";

export default class Login extends React.Component {
  constructor() {
    super();
    let loggedIn = false;
    let showSignup = false;
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
    };
  }

  componentDidMount() {
    var token = null;

   // messaging.usePublicVapidKey(
   //   "BG1ADrSkecmEUxszVCuTHJO9DpPK0EZoeg3Nh5tfIIFDIeznVMHUsMzt_jqYBMP14uOTTBbdj4g-pXtjn-O39G4"
   // );
  //  messaging.getToken().then((current) => {
  //    localStorage.setItem("t456", current);
      //sendTokenToSever(Math.floor(Math.random() * 100),current)
  //    push(current);
//});
 //  messaging.onMessage((payload) => {
  //    console.log("Message received. ", payload);

   //   const options = {
   //     body: payload.notification.body,
  //      icon: payload.notification.icon,
   //   };
  //  });
   // navigator.serviceWorker.addEventListener("message", (message) =>
  //    console.log(message)
  //  );
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
        console.log(response.data.role);
        this.setState({ role: response.data.role });

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
      <div className="wrap">
        <StyleRoot>
          <div style={styles.bounceInLeft}>
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
        </StyleRoot>
      </div>
    );
  }
}
