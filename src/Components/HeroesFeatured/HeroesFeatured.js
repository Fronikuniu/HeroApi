import { useEffect, useState } from 'react';
import './HeroesFeatured.css';
import { getBasicHeroInfoById } from '../../Requests/requests';
import HeroFeatured from './HeroFeatured/HeroFeatured';

const featuredHeroesIds = [10, 20, 30, 40];

function HeroesFeatured() {
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
  };

  return (
    <section className="featured">
      {featuredHeroesList.map(({ name, powerstats, imgUrl }) => (
        <HeroFeatured name={name} powerstats={powerstats} imgUrl={imgUrl} />
      ))}
    </section>
  );
}

export default HeroesFeatured;
