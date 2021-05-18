// import * as icon from '../../../assets/icons';
import './HeroFeatured.css';

function HeroFeatured({ name, imgUrl, powerstats }) {
  return (
    <div className="featured__hero__card">
      <img className="featured__hero__img" src={imgUrl} alt={name + "'s photo"} />
      <div className="featured__hero__text">
        <h2 className="featured__hero__name">{name}</h2>
        <div className="featured__hero__powerstats">
          <div>
            {/* <img
              className="featured__hero__powerstats__icon"
              src={icon.combatIcon}
              alt="combat Icon"
            /> */}
            <label htmlFor="combat">Combat: </label>
            <progress id="combat" value={powerstats.combat} max="100"></progress>
            <span>{powerstats.combat}</span>
          </div>
          <div>
            <label htmlFor="durability">Durability: </label>
            <progress id="durability" value={powerstats.durability} max="100"></progress>
            <span>{powerstats.durability}</span>
          </div>
          <div>
            <label htmlFor="intelligence">Intelligence: </label>
            <progress id="intelligence" value={powerstats.intelligence} max="100"></progress>
            <span>{powerstats.intelligence}</span>
          </div>
          <div>
            <label htmlFor="power">Power: </label>
            <progress id="power" value={powerstats.power} max="100"></progress>
            <span>{powerstats.power}</span>
          </div>
          <div>
            <label htmlFor="speed">Speed: </label>
            <progress id="speed" value={powerstats.speed} max="100"></progress>
            <span>{powerstats.speed}</span>
          </div>
          <div>
            <label htmlFor="strength">Strength: </label>
            <progress id="strength" value={powerstats.strength} max="100"></progress>
            <span>{powerstats.strength}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFeatured;
