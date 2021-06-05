import './App.css';
import TextEditor from './components/TextEditor.js';
import TextPreview from './components/TextPreview.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.changeText = this.changeText.bind(this);
  };

  changeText = e => {
    this.setState({
      text: e.target.value
    });
  };

  render = () => {
    const { text } = this.state;

    return (
      <div className="App">
        <TextEditor text={text} changeText={this.changeText} />
        <TextPreview text={text} />
      </div>
    );
  };
};

export default App;
