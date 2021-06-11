import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Todos from "./Todos";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello World</h1>
          <Todos />
        </div>
      </Provider>
    );
  }
}

export default App;
