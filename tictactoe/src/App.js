import './App.css';
import StartPage from './components/Startpage/index';
import Selection from './components/Selection/Select';
// import Ai from './components/Game/AI/';
import WithFriends from './components/Game/WithFriend/Game';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exect path='/start'>
        <StartPage />
        </Route>

        <Route path='/select'>
          <Selection />
        </Route>

        <Route path='/withfriends'>
          <WithFriends /> 
        </Route>

        {/* <Route path='/ai'>
          <Ai /> 
        </Route> */}
    </div>
    </Router>
  );
}

export default App;
