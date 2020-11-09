import React from 'react';
import './App.scss';
import { Search } from './components/Search'
import { Main } from './components/View'
import { Text } from './_enums/text.enum'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (

  //   <Switch location={background || location}>
  //   <Route exact path="/" children={<Home />} />
  //   <Route path="/gallery" children={<Gallery />} />
  //   <Route path="/img/:id" children={<ImageView />} />
  // </Switch>


  // history.push(`/s/photos/${value}`);


    <div className="App"> 
    <Router>
      <Switch>
        <Route path="/">
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
        </Route>  
        <Route path="/131232131233221123123213" component={Main}>
          <Main />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
