import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import AppProvider from "./AppContext";

render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>,
  document.getElementById('root')
);