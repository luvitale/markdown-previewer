import './App.css';
import TextEditor from './components/TextEditor.js';
import TextPreview from './components/TextPreview.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    return (
      <div className="App">
        <TextEditor />
        <TextPreview />
      </div>
    );
  };
};

export default App;
