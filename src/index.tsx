import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import AppProvider from "./AppContext";
import { Provider as RootProvider } from "react-redux";
import store from './redux/store';

render(
  <Router>
    <RootProvider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </RootProvider>
  </Router>,
  document.getElementById('root')
);