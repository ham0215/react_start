import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components/macro';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import todo from './todo.js'

const StyledDiv = styled.div`
  width: 100px;
`;

const ExtendStyledDiv = styled(StyledDiv)`
  background-color: red;
`;

function App() {
  const liStyle = {
    display: 'inline',
    width: '100px'
  }
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
        <Router>
          <div style={{width: '500px', textAlign: 'left'}}>
            <ul style={{display: 'flex'}}>
              <li style={liStyle}><Link to='/'>top</Link></li>
              <li style={liStyle}><Link to='/todo'>todo</Link></li>
            </ul>
          </div>
          <div style={{marginLeft: '50px'}}>
            <Route path='/todo' exact component={todo}/>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
