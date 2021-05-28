import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../Requests/requests';
import HeroFeatured from './HeroFeatured/HeroFeatured';
import Loader from '../Loader/Loader';
import './HeroesFeatured.css';
import FeaturedHeroesRefresh from '../FeaturedHeroesRefresh/FeaturedHeroesRefresh';

let featuredHeroesIds = [];
export default function HeroesFeatured() {
  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    fetchAndDisplayFeaturedHeroes();
  }, []);

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
              <HeroFeatured key={id} name={name} powerstats={powerstats} imgUrl={imgUrl} id={id} />
            ))}
          </div>
        )}{' '}
        {isLoading && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </section>
      <FeaturedHeroesRefresh />
    </>
  );
}
