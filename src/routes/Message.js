import react from 'react';
import {Card, CardText} from 'material-ui/Card';

export default class Message extends React.Component{
  render() {  
    return(
        <div>
        <Card>
        <CardText>
            Congratulations, you have successfully signed up
            </CardText>
            </Card>
            </div>
    );
 }

}