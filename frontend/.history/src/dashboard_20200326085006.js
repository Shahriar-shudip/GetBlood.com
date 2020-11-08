import React from 'react';
import { Card, Icon, Image ,Input, Button,Form, Label} from 'semantic-ui-react'
import Axios from 'axios'
import { timeoutsShape } from 'shards-react';
import { findByLabelText } from '@testing-library/react';
import {Redirect} from 'react-router-dom'
import Map from './Map'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        let ren
        this.state = {
            userInfo:{},
            checked:false,
            bloodGroup:"",
            name:[],
            res:[],
            lang:"",
            long:"",
            ren
        };
        
        this.getUser();
        this.getBank();
       // this.style= this.style.bind(this);
    }  
    s = {
        display:"flex",
        height :"14px",
        width:"44px"

    }
    getUser() {
        const {user} = this.state;
        console.log("i am calld "+user+"")
        try {
            Axios({
              url: 'http://852c0463.ngrok.io/findBy/',
              method: 'post',
              data: {
                id:this.props.location.state.id
                
              }
            }).then(response => {
              console.log("i am from dashboard" +response);  
              
              this.setState({userInfo:{...response.data.userDetails[0]}})
            console.log("........"+this.state.userInfo);

            })
          } catch (err) {
            console.log('problem');
          }
    }
    onChange = (ev) => {
         console.log(this.state.bloodGroup)
        this.setState({
          [ev.target.name]:ev.target.value
        })
      }
    getBank=(ev)=>{
        
       const {bloodGroup} =this.state
        try{
            Axios({
                url: 'http://localhost:9000/getBlood',
                method: 'post',
                data: {
                  blood_group:bloodGroup
                  
                }
              }).then(response => {
             
             
                
                response.data.result.forEach(element => {
                  console.log(element.name)
                  this.state.name.push(element.name)
                  console.log(this.state.name)
                  this.renn();
                  
                });
              
  
            })
        }catch(e){

        }
    }
    renn(){
     this.state.ren=this.state.name.map(e=><p>{e}</p>)
    }
    render() {
      //  if(this.state.token===null){
      //      return <Redirect to="/login"/>
     //   }
    //    else{
           
            
            
            
           
            return (
             
            <div >
            <Form.Field inline>
            <input type="text" 
            placeholder="bloodGroup" 
            name="bloodGroup" 
            value={this.state.bloodGroup}
            onChange={this.onChange} 
            autoFocus/>
            
            </Form.Field>
               <Button inverted color="pink" onClick={this.getBank}>search</Button>
          
           <div style={{marginTop:'100px'}}>
            {this.ren()}
           </div>
            </div>);
      //  }
      
    }
}