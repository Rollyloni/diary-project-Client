import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewEntry from "./Pages/NewEntry";
import OldEntries from "./Pages/OldEntries";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={OldEntries}  />
        <Route path="/new-entry" component={NewEntry} />
        <Route path="/old-entries" component={OldEntries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
