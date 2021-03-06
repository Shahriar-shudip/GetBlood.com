import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post/Post";
import "./newfeed.css";
import { Button, Segment } from "semantic-ui-react";
import LoginModal from "../Login/LoginModal";
import flash from "react-animations/lib/flash";
export default class Newsfeed extends React.Component {
  state = {
    post: [],
    isLoggedIn:false
  };
   
  constructor(props) {
    super(props);
    let isLoggedIn=false;
    this.state = {
      post: [],
      isLoggedIn:false
    };

    
  }
  componentDidMount() {
    Axios.get("http://localhost:9000/feed").then((r) => {
      this.setState({ post: r.data.post });
      console.log(this.state.post);
    });
    console.log(this.state.post);
  }

  window.onClick = function(ev){
    ev.preventDefault()
    this.setState({isLoggedIn:false})
  }


  showLogin=(ev)=>{
    ev.preventDefault()
    this.setState({isLoggedIn:true})
  }
  render() {
    let post = this.state.post.map((r, k) => {
      return (
        <div>
          <Post key={k} data={r}></Post>
        </div>
      );
    });
    return (
      <div>
        <div className="navbar">
          <div className="logbutton">
            <Button basic color="violet" onClick={this.showLogin}>
              Login
            </Button>
            <Button basic color="green">
              Sign in
            </Button>
          </div>
        </div>
        <div className="modal"  style={ this.state.isLoggedIn ? { display:'block'} : {display : 'none'} }  >
          <LoginModal/>
        </div>
        <div className="feed">
          <ul>{post}</ul>
        </div>
      </div>
    );
  }
}
