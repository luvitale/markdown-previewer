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
      <div className="TextPreview" id="text-preview">
        <div id="preview"
          dangerouslySetInnerHTML= {{
            __html: marked(text)
          }}
        />
      </div>
    );
  };
};

export default TextPreview;