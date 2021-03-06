import{
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} 
  from '@apollo/client'

import Home from './Home ';

function App() {
  const client= new ApolloClient({
    cache:new InMemoryCache(),
    uri:"https://graphql-weather-api.herokuapp.com/",
  })
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;