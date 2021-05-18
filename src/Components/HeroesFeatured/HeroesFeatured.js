import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../Requests/requests';
import HeroFeatured from './HeroFeatured/HeroFeatured';
import './HeroesFeatured.css';

const featuredHeroesIds = [10, 20, 30, 40, 60, 505];

export default function HeroesFeatured() {
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
      {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
        <HeroFeatured key={id} name={name} powerstats={powerstats} imgUrl={imgUrl} />
      ))}
    </section>
  );
}
