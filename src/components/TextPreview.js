import React from 'react';

class TextPreview extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    return (
      <div className="TextPreview" id="text-preview">
        <p id="preview"></p>
      </div>
    );
  };
};

export default TextPreview;