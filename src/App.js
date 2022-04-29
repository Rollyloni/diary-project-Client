import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FormComponent from "./Components/FormComponent";
import NavBarComponent from "./Components/NavBarComponent";
import SearchComponent from "./Components/SearchComponent";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route exact component={FormComponent} path="/form" />
        <Route component={SearchComponent} path="/search" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
