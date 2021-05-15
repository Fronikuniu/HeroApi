import './App.css';
import Nav from './Components/Nav/Nav';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <section className="container">
            <Switch>
              <Route exact path="/">
                <HeroesFeatured />
              </Route>
              <Route path="/hero/search/:name"></Route>
              <Route path="/hero/:id"></Route>
            </Switch>
          </section>
        </main>
        <footer>
          <div className="container">
            <p>
              This content is kindly provided by
              <a href="https://superheroapi.com/">SuperHero API</a>
            </p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
