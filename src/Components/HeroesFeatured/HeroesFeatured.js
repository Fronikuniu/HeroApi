import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../Requests/requests';
import HeroFeatured from './HeroFeatured/HeroFeatured';
import './HeroesFeatured.css';
import Loader from '../Loader/Loader';

let liczba;
let featuredHeroesIds = [];

for (let i = 0; i < 4; i++) {
  liczba = Math.floor(Math.random() * (731 - 0 + 1)) + 0; // Math.floor(Math.random() * (Max - Min + 1)) + Min
  featuredHeroesIds.push(liczba);
}

export default function HeroesFeatured() {
  useEffect(() => {
    fetchAndDisplayFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const fetchAndDisplayFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId); // {data} tell us, we only want to retrieve only object data from object || {data} mówi nam, ze chcemy pobrac tylko obiekt data z obiektu
      heroes.push(data);
    }
    setFeaturedHeroesList(heroes);
    setLoadingState(false);
  };

  return (
    <>
      <section className="featured">
        <h1>Featured Heroes</h1>
        {!isLoading && (
          <div className="featured__list">
            {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
              <HeroFeatured key={id} name={name} powerstats={powerstats} imgUrl={imgUrl} />
            ))}
          </div>
        )}{' '}
        {isLoading && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </section>
    </>
  );
}
