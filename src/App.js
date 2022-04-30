import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NewEntry from "./Pages/NewEntry/NewEntry";
import OldEntries from "./Pages/OldEntries/OldEntries";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}  />
        <Route path="/new-entry" component={NewEntry} />
        <Route path="/old-entries" component={OldEntries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
