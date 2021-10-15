import axios from 'axios';

const PROXY = window.location.hostname === 'localhost' ? 'https://cors-anywhere.herokuapp.com' : '/cors-proxy';

export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(`${PROXY}/https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}/powerstats`);
  const { data: image } = await axios.get(`${PROXY}/https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}/image`);
  return { name: powerstats.name, powerstats, imgUrl: image.url, id: powerstats.id };
};

export const getFullHeroInfoById = (id) => {
  return axios.get(`${PROXY}/https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}`);
};

export const searchHeroByName = (name) => {
  return axios.get(`${PROXY}/https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/search/${name}`);
};
