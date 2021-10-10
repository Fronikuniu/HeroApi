import Nav from './Components/Nav/Nav';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';
import SearchView from './Components/SearchView/SearchView';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HeroDetails from './Components/HeroDetails/HeroDetails';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <section className="featured__hero">
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <HeroesFeatured />
                </Route>
                <Route path="/search=:name">
                  <SearchView />
                </Route>
                <Route path="/hero/id=:id">
                  <HeroDetails />
                </Route>
              </Switch>
            </div>
          </section>
        </main>
        <footer>
          <div className="container">
            <p>
              This content is kindly provided by:
              <a target="_blank" rel="noreferrer" href="https://superheroapi.com/">
                {' '}
                SuperHero API
              </a>
            </p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
