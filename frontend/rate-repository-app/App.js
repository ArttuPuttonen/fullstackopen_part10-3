import Main from './src/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <>
      <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;