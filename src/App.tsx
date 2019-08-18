import React from 'react';
import logo from './logo.svg';
import './App.css';
import I18N from '../langs'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          编辑 <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {I18N.common.action}
        </a>`
      </header>
    </div>
  );
}

export default App;
