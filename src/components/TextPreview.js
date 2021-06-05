import React from 'react';

class TextPreview extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    const { text } = this.props;

    return (
      <div className="TextPreview" id="text-preview">
        <p id="preview">{text}</p>
      </div>
    );
  };
};

export default TextPreview;