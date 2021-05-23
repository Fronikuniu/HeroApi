import { Link } from 'react-router-dom';
import * as icon from '../../../assets/icons';
import './HeroFeatured.css';

function HeroFeatured({ name, imgUrl, powerstats, id }) {
  return (
    <Link className="featured__hero__card" to={`/hero/heroId=${id}`}>
      <img className="featured__hero__img" src={imgUrl} alt={name + "'s photo"} />
      <div className="featured__hero__text">
        <h2 className="featured__hero__name">{name}</h2>
        <div className="featured__hero__powerstats">
          <div>
            <label htmlFor="combat">Combat: </label>
            <progress id="combat" value={powerstats.combat} max="100"></progress>
            <span>
              <img className="featured__hero__powerstats__icon" src={icon.combatIcon} alt="combat Icon" />
              {powerstats.combat}
            </span>
          </div>
          <div>
            <label htmlFor="durability">Durability: </label>
            <progress id="durability" value={powerstats.durability} max="100"></progress>
            <span>
              <img className="featured__hero__powerstats__icon" src={icon.durabilityIcon} alt="durability Icon" />
              {powerstats.durability}
            </span>
          </div>
          <div>
            <label htmlFor="intelligence">Intelligence: </label>
            <progress id="intelligence" value={powerstats.intelligence} max="100"></progress>
            <span>
              <img className="featured__hero__powerstats__icon" src={icon.intelligenceIcon} alt="intelligence Icon" />
              {powerstats.intelligence}
            </span>
          </div>
          <div>
            <label htmlFor="power">Power: </label>
            <progress id="power" value={powerstats.power} max="100"></progress>
            <span>
              <img className="featured__hero__powerstats__icon" src={icon.powerIcon} alt="power Icon" />
              {powerstats.power}
            </span>
          </div>
          <div>
            <label htmlFor="speed">Speed: </label>
            <progress id="speed" value={powerstats.speed} max="100"></progress>
            <span>
              <img className="featured__hero__powerstats__icon" src={icon.speedIcon} alt="speed Icon" />
              {powerstats.speed}
            </span>
          </div>
          <div>
            <label htmlFor="strength">Strength: </label>
            <progress id="strength" value={powerstats.strength} max="100"></progress>
            <span>
              <img className="featured__hero__powerstats__icon" src={icon.strengthIcon} alt="strength Icon" />
              {powerstats.strength}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HeroFeatured;
