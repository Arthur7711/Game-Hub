import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import AllGames from "./pages/allGames/AllGames";
import About from "./pages/about/About";
import Register from "./pages/register/Register";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/games" component={AllGames} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
