import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      country: '',
      number: '',
      email: '',
      password: '',
      status: '',
      isDeleted: false,
    };
  }
  
onChange = (e) => {
   if (e.target.name === 'isDeleted'){
     this.setState({
         [e.target.name]: e.target.checked
     });
   }else{
       this.setState({
           [e.target.name]: e.target.value,
       });
   }
}

// handleSubmit = () => {
//     alert ('you have signed up');
// }
 state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

render(){
return(
 <div>
        <MuiThemeProvider>
          <div>
          <AppBar text="center"
             title="Register"
           />
           <TextField
             name="firstName"
             hintText="Enter your firstname"
             floatingLabelText="Firstname"
             onChange={e => this.onChange(e)}
             value={this.state.firstName}
             />
           <br/>
           <TextField
             name="lastName"
             hintText="Enter your last name"
             floatingLabelText="Last Name"
             onChange={e => this.onChange(e)}
             value={this.state.lastName}
             />
           <br/>
           <TextField
             name="country"
             hintText="Enter your country name"
             floatingLabelText="Country"
             onChange={e => this.onChange(e)}
             value={this.state.country}
             />
           <br/>
           <TextField
             name="number"
             type="number"
             hintText="Enter your mobile number"
             floatingLabelText="Phone Number"
             onChange={e => this.onChange(e)}
             value={this.state.number}
             />
           <br/>
           <TextField
             name="email"
             hintText="Enter your email"
             floatingLabelText="Email"
             onChange={e => this.onChange(e)}
             value={this.state.email}
             />
           <br/>
             <TextField
               name="password"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange={e => this.onChange(e)}
               value={this.state.password}
               />
             <br/>
             <SelectField
          floatingLabelText="Status"
          name="status"
          value={this.state.value}
          onChange={this.handleChange}    
        >
          <MenuItem value={1} primaryText="Single" />
          <MenuItem value={2} primaryText="Married" />
        </SelectField>
            <br />
             <RaisedButton label="Sign Up" primary={true} style={style} />
         </div>
         </MuiThemeProvider>
      </div>
      
    );
  }
}
      
const style = {
 margin: 15,
};
 