import React from 'react';
import './App.scss';
import { Search } from './components/Search'
import { Text } from './_enums/text.enum'

function App() {
  return (
    <div className="App">
      <div className="textContainer">
      <h1>
        { Text.Headline }
      </h1>
      <p>
        { Text.ParagraphFirstLine } <br></br>
        { Text.ParagraphSecondLine }
      </p>
      </div>
     
      <Search />
    </div>
  );
}

export default App;
