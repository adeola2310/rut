import React from 'react';
import ReactDOM from 'react-dom';
import  Routes from './routes';
// import { ApolloProvider} from 'react-apollo';
// import { ApolloClient, createNetworkInterface} from 'react-apollo';
// client send queries to the graphql endpoing on the same host

// const networkInterface = createNetworkInterface({
//   uri: 'http//localhost:3000/graphql'
// });
// const client = new ApolloClient ({
//   networkInterface: networkInterface
// });



const App = () => 

<Routes />




ReactDOM.render(<App />, document.getElementById('root'));
