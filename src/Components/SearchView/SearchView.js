import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchHeroByName } from '../../Requests/requests';
import HeroFeatured from '../HeroesFeatured/HeroFeatured/HeroFeatured';
import Loader from '../Loader/Loader';
import './SearchView.css';

function SearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;
      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

  return (
    <>
      <section className="search__view">
        <h1>
          Search by: <span className="search__view__name">{name}</span>
        </h1>
        {!isLoading && (
          <div className="search__view__heroes">
            {searchList.map(({ powerstats, image, name, id }) => (
              <HeroFeatured key={id} powerstats={powerstats} imgUrl={image.url} name={name} />
            ))}
          </div>
        )}
        {isLoading && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </section>
    </>
  );
}

export default SearchView;
