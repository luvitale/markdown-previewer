import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    return (
      <div className="TextEditor" id="text-editor">
        <textarea id="editor"></textarea>
      </div>
    );
  };
};

export default TextEditor;