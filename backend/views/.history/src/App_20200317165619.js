import React from 'react';
import {Switch , Route, Router, Redirect} from 'react-router-dom'
import Login from './Login'
import Map from './Map'
import Dashboard from './dashboard';
import signup from './signup'
import Home from './Home'
import home from './home.png'
import './App.css'
function a(){
    alert('adsfadsfsadfsdaf')
  }
function App () {
  
    return (
      
     
          
        
        
          <div>
        <Switch>
        <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={signup} />
        </Switch>
      
           <button onclick={a}> asdfadsf</button>
        
        </div>
       
       
        
       
    
    
       
 
      
            
            
        
            
      
   )
}
export default App;