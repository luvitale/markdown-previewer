import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <div className="App">
        <textarea id="editor"></textarea>
        <p id="preview"></p>
      </div>
    );
  }
}

export default App;
