import  React from 'react';
import { Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class Login extends React.Component{
render(){
return(

           <div>
        <MuiThemeProvider>
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
         <h6><Link to="/#"> Forgot Password?</Link> </h6>
        <h6> Don't have an account here? Register <Link to="/register">here </Link> </h6>
         
         </MuiThemeProvider>
      </div>
      
    );
  }
}
const style = {
 margin: 15,
};
