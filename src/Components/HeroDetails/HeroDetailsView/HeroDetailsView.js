import * as icon from '../../../assets/icons';
import './HeroDetailsView.css';

function HeroDetailsView({ hero }) {
  return (
    <>
      {
        <div className="hero__details__view__card">
          <img className="hero__details__view__card__avatar" src={hero.image.url} alt={hero.name} />
          <div className="hero__details__view__card__text">
            <h1>
              {hero.name} <span>{hero.biography['full-name']}</span>
            </h1>
            <h2>{hero.biography.publisher}</h2>

            <h3>Hero's gender:</h3>
            <p>{hero.appearance.gender}</p>

            <h3>Hero's race:</h3>
            <p>{hero.appearance.race}</p>

            <h3>Powerstats: </h3>
            <div className="hero__details__view__powerstats">
              <div className="hero__details__view__item">
                <label htmlFor="combat">Combat: </label>
                <progress id="combat" value={hero.powerstats.combat} max="100"></progress>
                <span>
                  <img className="hero__details__view__powerstats__icon" src={icon.combatIcon} alt="combat Icon" />
                  {hero.powerstats.combat}
                </span>
              </div>
              <div className="hero__details__view__item">
                <label htmlFor="durability">Durability: </label>
                <progress id="durability" value={hero.powerstats.durability} max="100"></progress>
                <span>
                  <img className="hero__details__view__powerstats__icon" src={icon.durabilityIcon} alt="durability Icon" />
                  {hero.powerstats.durability}
                </span>
              </div>
              <div className="hero__details__view__item">
                <label htmlFor="intelligence">Intelligence: </label>
                <progress id="intelligence" value={hero.powerstats.intelligence} max="100"></progress>
                <span>
                  <img className="hero__details__view__powerstats__icon" src={icon.intelligenceIcon} alt="intelligence Icon" />
                  {hero.powerstats.intelligence}
                </span>
              </div>

              <div className="hero__details__view__item">
                <label htmlFor="power">Power: </label>
                <progress id="power" value={hero.powerstats.power} max="100"></progress>
                <span>
                  <img className="hero__details__view__powerstats__icon" src={icon.powerIcon} alt="power Icon" />
                  {hero.powerstats.power}
                </span>
              </div>
              <div className="hero__details__view__item">
                <label htmlFor="speed">Speed: </label>
                <progress id="speed" value={hero.powerstats.speed} max="100"></progress>
                <span>
                  <img className="hero__details__view__powerstats__icon" src={icon.speedIcon} alt="speed Icon" />
                  {hero.powerstats.speed}
                </span>
              </div>
              <div className="hero__details__view__item">
                <label htmlFor="strength">Strength: </label>
                <progress id="strength" value={hero.powerstats.strength} max="100"></progress>
                <span>
                  <img className="hero__details__view__powerstats__icon" src={icon.strengthIcon} alt="strength Icon" />
                  {hero.powerstats.strength}
                </span>
              </div>
            </div>

            <h3>Hero's occupation:</h3>
            <p>{hero.work.occupation}</p>

            <h3>District of hero's activities:</h3>
            <p>{hero.work.base}</p>

            <h3>Relatives of the hero:</h3>
            <p>{hero.connections.relatives}</p>
          </div>
        </div>
      }
    </>
  );
}

export default HeroDetailsView;
