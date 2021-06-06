import './App.css';
import TextEditor from './components/TextEditor.js';
import TextPreview from './components/TextPreview.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: initial_markdown
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

const initial_markdown = `# Markdown Previewer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## User stories

1. I can see a textarea element with a corresponding id="editor".

2. I can see an element with a corresponding id="preview".

3. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

4. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

5. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

7. My markdown previewer interprets carriage returns and renders them as br (line break) elements.

\`\`\`
import React from 'react';
import marked from 'marked';

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
\`\`\`

> npm install marked

- **NPM**
  - React
    - Marked

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. \
You will also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode. \
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder. \
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. \
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

![LuVitale](https://luvitale.net/favicon.ico)
`

export default App;
