import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counters.jsx";
import "./styles.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./store/reducer/counterReducer.jsx";
import secondReducer from "./store/reducer/secondReducer.jsx";
const rootReducer = combineReducers({ counterReducer, secondReducer });
const store = createStore(rootReducer);
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
