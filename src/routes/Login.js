import  React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Register from './Register';


export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }
render(){
return(

           <div>
        <MuiThemeProvider>
          <div>
          <div>
          <AppBar
             title="Welcome to 'App'"
           />
           <TextField
             hintText="Enter your firstname"
             floatingLabelText="Firstname"
             />
           <br/>
           <TextField
             hintText="Enter your email"
             floatingLabelText="Email"
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               />
             <br/>
             <RaisedButton label="Sign In" primary={true} style={style} />
         </div>
         <br />
          <Router>
            <div>
              <h6><Link to="/#"> Forgot Password?</Link> </h6>
              <h6> Don't have an account here? Register <Link to="/register">here</Link> </h6>
                <Route path="/register" component={Register} />
            </div>
          </Router>
         </div>
         </MuiThemeProvider>
      </div>
      
    );
  }
}
const style = {
 margin: 15,
};
