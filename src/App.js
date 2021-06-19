import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import NoMatch from './components/NoMatch/NoMatch';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path = '/home'>
          <Home/>
        </Route>
        <Route path = "/info/:id">
          <Details/>
        </Route>
        <Route path="/*">
        <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
