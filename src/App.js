import './App.css';
import Search from './componenet/Search';
import DisplayData from './componenet/List';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/display" component={DisplayData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
