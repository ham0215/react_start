import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components/macro';
import './App.css';

const StyledDiv = styled.div`
  width: 100px;
`;

const ExtendStyledDiv = styled(StyledDiv)`
  background-color: red;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledDiv>StyledDiv</StyledDiv>
        <ExtendStyledDiv>ExtendStyledDiv</ExtendStyledDiv>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
