import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

class TextPreview extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    const { text } = this.props;

    return (
      <div className="TextPreview" id="preview"
        dangerouslySetInnerHTML= {{
          __html: marked(text)
        }}
      />
    );
  };
};

export default TextPreview;