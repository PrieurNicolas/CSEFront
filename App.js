import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './components/Navigation.js';
import { AuthProvider } from './src/AuthContext.js';
import { IdProvider } from './src/Id'

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <IdProvider>
        <StatusBar hidden={true} />
        <Navigation />
        </IdProvider>
      </AuthProvider>
    )
  }
}
export default App