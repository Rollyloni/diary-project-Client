import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import SearchComponent from "./Components/SearchComponent";
import NewEntry from "./Pages/NewEntry/NewEntry";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}  />
        <Route path="/new-entry" component={NewEntry} />
        {/* <Route component={SearchComponent} path="/search" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
