import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
