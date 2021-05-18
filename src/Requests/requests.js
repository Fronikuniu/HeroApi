import axios from 'axios';

export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(
    `https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}/powerstats`
  );
  const { data: image } = await axios.get(
    `https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}/image`
  );
  return { name: powerstats.name, powerstats, imgUrl: image.url, id: powerstats.id };
};

export const searchHeroByName = (name) => {
  return axios.get(`https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/search/${name}`);
};
