import { useState } from 'react';
import './FeaturedHeroesRefresh.css';

function FeaturedHeroesRefresh() {
  let [featuredHeroesIds, setFeaturedHeroesIds] = useState([1, 2, 3, 4]);

  const generateRandomIds = () => {
    let numberOfId;
    featuredHeroesIds = [];

    for (let i = 0; i < 4; i++) {
      numberOfId = Math.floor(Math.random() * (731 - 0 + 1)) + 0; // Math.floor(Math.random() * (Max - Min + 1)) + Min
      featuredHeroesIds.push(numberOfId);
    }

    setFeaturedHeroesIds(featuredHeroesIds);

    return featuredHeroesIds;
  };

  console.log(featuredHeroesIds);

  return (
    <>
      <section className="featured__hero__refresh">
        <div className="container">
          <button onClick={() => generateRandomIds()} className="featured__button">
            Show new Featured Heroes
          </button>
        </div>
      </section>
    </>
  );
}
export default FeaturedHeroesRefresh;
