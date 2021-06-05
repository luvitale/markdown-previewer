import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    return (
      <div className="TextEditor" id="text-editor">
        <textarea id="editor" onChange={this.props.changeText}>
          {this.props.text}
        </textarea>
      </div>
    );
  };
};

export default TextEditor;