import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from './Login'
import drop from './drop.png'
import b from './b.png'
import Radium, {StyleRoot} from 'radium';
import { bounceInLeft } from 'react-animations';
import { Card, CardImg,CardBody, Button, FormInput, CardHeader } from "shards-react"
import { Redirect } from 'react-router-dom';
export default class Home extends React.Component {

    constructor() {
        super()
       let loginClicked=false
        this.state = {
        
          loginClicked
        }
        
      }
     login_clicked=(e)=> {
        e.preventDefault()
         console.log('i am clicked')
         this.setState({
             loginClicked:true
         })
     }
     render()
     {
       if(this.state.loginClicked===true){
            console.log('asdfasdfasdfsdf')
            this.setState({ loginClicked:false})
            return (<Redirect to={{ pathname:'/login'}} />);
            
        }
        const styles = {
            bounceInLeft: {
              animation: 'x 2s',
              animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
            }
          }
         return (
             
         <div className="wrap">


           <h1>
             Welcome
           </h1>

           <StyleRoot>
               <div style={styles.bounceInLeft } >               
                <Card className="inner-border">
                <CardImg style={{ width:'100px'}} src={drop} />   
                <CardHeader className="f">Welcome to Getblood.com</CardHeader>
              <CardBody>
               <div >
                <Button type="submit" outline pill theme="info"  onClick={this.login_clicked}> Login </Button>
                <Button outline pill theme="danger" > signup </Button>
               </div>
               </CardBody>  
                </Card>
             </div>
             </StyleRoot>
         </div>
         
         )
     }

}