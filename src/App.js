import React, { Component } from 'react';
import styled from 'styled-components';
import CharacterCard from './components/CharacterCard';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <CharacterCard />
      </PageWrapper>
    );
  }
}

const PageWrapper = styled.div`
  width: 60%;
  margin: 50px auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export default App;
