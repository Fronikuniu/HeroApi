import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { getBasicHeroInfoById } from './Requests/requests';

const featuredHeroesIds = [10, 20, 30, 40];

function App() {
  useEffect(() => {
    fetchAndDisplayFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);

  const fetchAndDisplayFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId); // {data} mówi nam, ze chcemy pobrac tylko obiekt data z obiektu
      heroes.push(data);
    }
    setFeaturedHeroesList(heroes);
    console.log(heroes);
  };

  return (
    <>
      <Nav></Nav>
      <main>
        <section className="featured">
          {featuredHeroesList.map(({ name, powerstats, imgUrl }) => (
            <div className="featured__hero__card">
              <h2 className="featured__hero__name">{name}</h2>
              <img
                className="featured__hero__img"
                src={imgUrl}
                alt={name + "'s photo"}
              />
              <div className="featured__hero__powerstats">
                <div>
                  <label for="combat">Walka: </label>
                  <progress
                    id="combat"
                    value={powerstats.combat}
                    max="100"
                  ></progress>
                </div>
                <div>
                  <label for="durability">Wytrwałość: </label>
                  <progress
                    id="durability"
                    value={powerstats.durability}
                    max="100"
                  ></progress>
                </div>
                <div>
                  <label for="intelligence">Inteligencja: </label>
                  <progress
                    id="intelligence"
                    value={powerstats.intelligence}
                    max="100"
                  ></progress>
                </div>
                <div>
                  <label for="power">Moc: </label>
                  <progress
                    id="power"
                    value={powerstats.power}
                    max="100"
                  ></progress>
                </div>
                <div>
                  <label for="speed">Szybkość: </label>
                  <progress
                    id="speed"
                    value={powerstats.speed}
                    max="100"
                  ></progress>
                </div>
                <div>
                  <label for="strength">Siła: </label>
                  <progress
                    id="strength"
                    value={powerstats.strength}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
