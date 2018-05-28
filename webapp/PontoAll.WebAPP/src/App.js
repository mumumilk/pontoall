import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header/>
        <Home/>
      </AppContainer>
    );
  }
}

export default App;
