import { BrowserRouter, Route } from "react-router-dom";
import EnglishHome from "./pages/EnglishHome/index";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={EnglishHome} />
      <Route exact path="/home-eng" component={EnglishHome} />
      <Route exact path="/home-fr" component={EnglishHome} />
    </BrowserRouter>
  );
}

export default App;
