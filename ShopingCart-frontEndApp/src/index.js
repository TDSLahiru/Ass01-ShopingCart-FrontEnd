import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./resources/Components/App/Router";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux'
import stores from './resources/store/index'

ReactDOM.render(
    <Provider store={stores}>
        <Router />
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();