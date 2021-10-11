import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../Requests/requests';
import HeroFeatured from './HeroFeatured/HeroFeatured';
import Loader from '../Loader/Loader';
import './HeroesFeatured.css';

function HeroesFeatured() {
  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
  let [featuredHeroesIds, setFeaturedHeroesIds] = useState([1, 2, 3, 4]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    fetchAndDisplayFeaturedHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateRandomIds = () => {
    setLoadingState(true);

    let numberOfId;
    featuredHeroesIds = [];

    for (let i = 0; i < 4; i++) {
      numberOfId = Math.floor(Math.random() * (731 - 0 + 1)) + 0; // Math.floor(Math.random() * (Max - Min + 1)) + Min
      featuredHeroesIds.push(numberOfId);
    }

    setFeaturedHeroesIds(featuredHeroesIds);
    fetchAndDisplayFeaturedHeroes();
  };

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

      <section className="featured__hero__refresh">
        {!isLoading && (
          <div className="container">
            <button onClick={() => generateRandomIds()} className="featured__button">
              Show new Featured Heroes
            </button>
          </div>
        )}
        {isLoading && <></>}{' '}
      </section>
    </>
  );
}
export default HeroesFeatured;

// SAME COMPONENT AS CLASS COMPONENT

// class HeroesFeatured extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       featuredHeroesList: [],
//       isLoading: true,
//       featuredHeroesIds: [1, 2, 3, 4],
//     };
//   }

//   componentDidMount() {
//     this.fetchAndDisplayFeaturedHeroes();
//   }

//   generateRandomIds = () => {
//     this.setState({ isLoading: true });

//     let numberOfId;
//     this.setState({ featuredHeroesIds: (this.state.featuredHeroesIds = []) });

//     for (let i = 0; i < 4; i++) {
//       numberOfId = Math.floor(Math.random() * (731 - 0 + 1)) + 0; // Math.floor(Math.random() * (Max - Min + 1)) + Min
//       this.setState({ featuredHeroesIds: this.state.featuredHeroesIds.push(numberOfId) });
//     }

//     this.setState({ featuredHeroesIds: numberOfId });
//     this.fetchAndDisplayFeaturedHeroes();
//   };

//   fetchAndDisplayFeaturedHeroes = async () => {
//     let heroes = [];
//     for (const heroId of this.state.featuredHeroesIds) {
//       const data = await getBasicHeroInfoById(heroId); // {data} tell us, we only want to retrieve only object data from object || {data} mówi nam, ze chcemy pobrac tylko obiekt data z obiektu
//       heroes.push(data);
//     }

//     this.setState({ featuredHeroesList: heroes, isLoading: false });
//   };

//   render() {
//     const { isLoading, featuredHeroesList } = this.state;

//     return (
//       <>
//         <section className="featured">
//           <h1>Featured Heroes</h1>
//           {!isLoading && (
//             <div className="featured__list">
//               {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
//                 <HeroFeatured key={id} name={name} powerstats={powerstats} imgUrl={imgUrl} id={id} />
//               ))}
//             </div>
//           )}{' '}
//           {isLoading && (
//             <div className="loader-container">
//               <Loader />
//             </div>
//           )}
//         </section>

//         <section className="featured__hero__refresh">
//           {!isLoading && (
//             <div className="container">
//               <button onClick={() => this.generateRandomIds()} className="featured__button">
//                 Show new Featured Heroes
//               </button>
//             </div>
//           )}
//           {isLoading && <></>}{' '}
//         </section>
//       </>
//     );
//   }
// }

// export default HeroesFeatured;
