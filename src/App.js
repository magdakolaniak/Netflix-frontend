import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoadMovies from './components/Search/LoadMovies';
import MyNav from './components/Navbar/MyNav.jsx';
import MyFooter from './components/Footer/MyFooter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowDetails from './components/Search/ShowDetails';
import Registration from './components/Search/Registration';
import Kids from './components/Search/Kids';
function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />

        <Route
          render={(routerProps) => (
            <LoadMovies genre="comedy" {...routerProps} />
          )}
          path="/"
          exact
        />
        <Route
          render={(routerProps) => (
            <LoadMovies genre="romance" {...routerProps} />
          )}
          path="/"
          exact
        />

        <Route component={ShowDetails} path="/details/:check" />
        <Route component={Registration} path="/registration" exact />
        <Route component={Kids} path="/kids" exact />
        <MyFooter />
      </Router>
    </div>
  );
}

export default App;
