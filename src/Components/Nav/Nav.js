import { useState } from 'react';
import logo from '../../assets/img/nav_logo.png';
import { Link, Redirect } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [searchInputValue, setSearchInputValue] = useState('');

  return (
    <nav className="navi">
      <div className="container">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="Superhero" />
        </Link>
        <div className="nav__search">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              <Redirect to={`/search=${searchInputValue}`} />;
            }}
          >
            <input
              onChange={(event) => {
                setSearchInputValue(event.target.value);
              }}
              value={searchInputValue}
              type="text"
              name="search"
              placeholder="Find Hero!"
            />

            <Link to={`/search=${searchInputValue}`}>
              <button className="search__button material-icons">search</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
