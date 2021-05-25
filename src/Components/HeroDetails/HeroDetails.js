import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFullHeroInfoById } from '../../Requests/requests';
import HeroDetailsView from './HeroDetailsView/HeroDetailsView';
import './HeroDetails.css';
import Loader from '../Loader/Loader';

function HeroDetails() {
  const { id } = useParams();
  const [isLoading, setLoadingState] = useState(true);
  const [heroInfo, setFullHeroInfo] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    getFullHeroInfoById(id).then((heroIdResults) => {
      const { data } = heroIdResults;

      if (data.error) {
        setLoadingState(false);
        return;
      }

      const results = [];
      results.push(data);

      setFullHeroInfo(results);
      setLoadingState(false);
    });
  }, [id]);

  return (
    <>
      {!isLoading && (
        <>
          {heroInfo.map((hero) => (
            <HeroDetailsView key={hero.id} hero={hero} />
          ))}
        </>
      )}
      {isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </>
  );
}

export default HeroDetails;
