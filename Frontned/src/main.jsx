import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import App from "./App.jsx";
import rootReducer from "./reducers/index.js";
import { applyMiddleware, createStore } from "redux";
// import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
