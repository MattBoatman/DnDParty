import React, { Component } from 'react';
import styled from 'styled-components';
import CharacterCard from './components/CharacterCard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: { main: 'rgba(164, 74, 63, 1)' },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <PageWrapper>
          <CharacterCard />
        </PageWrapper>
      </MuiThemeProvider>
    );
  }
}

const PageWrapper = styled.div`
  width: 80%;
  margin: 50px auto;
  @media (max-width: 1200px) {
    width: 96%;
  }
`;

export default App;
