import './App.css';
import StartPage from './components/Startpage/index';
import SelectionForFriend from './components/Selection/SelectWithFriend';
import SelectionForAi from './components/Selection/SelectWithAi';

import WithFriends from './components/Game/WithFriend/Game';
import WithAi from './components/Game/AI/Game';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exect path='/start'>
        <StartPage />
        </Route>

        <Route path='/SelectionForAi'>
          <SelectionForAi />
        </Route>

        <Route path='/SelectionForFi'>
          <SelectionForFriend />
        </Route>

        <Route path='/withfriends'>
          <WithFriends /> 
        </Route>

        <Route path='/withai'>
          <WithAi /> 
        </Route>

    </div>
    </Router>
  );
}

export default App;
