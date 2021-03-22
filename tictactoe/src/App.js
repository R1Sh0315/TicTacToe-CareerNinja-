import './App.css';
import StartPage from './components/Startpage/index';
import Selection from './components/Selection/index';
import Game from './components/Game/index';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exect path='/Start'>
        <StartPage />
        </Route>

        <Route path='/Select'>
          <Selection />
        </Route>

        <Route path='/Game'>
          <Game /> 
        </Route>
    </div>
    </Router>
  );
}

export default App;
