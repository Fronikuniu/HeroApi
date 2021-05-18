import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchHeroByName } from '../../Requests/requests';
import HeroFeatured from '../HeroesFeatured/HeroFeatured/HeroFeatured';
import './SearchView.css';

function SearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    searchHeroByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;
      setSearchListContent(results);
    });
  }, [name]);

  return (
    <section>
      {searchList.map(({ powerstats, image, name }) => (
        <HeroFeatured powerstats={powerstats} imgUrl={image.url} name={name} />
      ))}
    </section>
  );
}

export default SearchView;
