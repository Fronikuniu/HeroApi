import './HeroFeatured.css';

function HeroFeatured({ name, powerstats, imgUrl }) {
  return (
    <div className="featured__hero__card">
      <img
        className="featured__hero__img"
        src={imgUrl}
        alt={name + "'s photo"}
      />
      <div className="featured__hero__text">
        <h2 className="featured__hero__name">{name}</h2>
        <div className="featured__hero__powerstats">
          <div>
            <label for="combat">Walka: </label>
            <progress
              id="combat"
              value={powerstats.combat}
              max="100"
            ></progress>
          </div>
          <div>
            <label for="durability">Wytrwałość: </label>
            <progress
              id="durability"
              value={powerstats.durability}
              max="100"
            ></progress>
          </div>
          <div>
            <label for="intelligence">Inteligencja: </label>
            <progress
              id="intelligence"
              value={powerstats.intelligence}
              max="100"
            ></progress>
          </div>
          <div>
            <label for="power">Moc: </label>
            <progress id="power" value={powerstats.power} max="100"></progress>
          </div>
          <div>
            <label for="speed">Szybkość: </label>
            <progress id="speed" value={powerstats.speed} max="100"></progress>
          </div>
          <div>
            <label for="strength">Siła: </label>
            <progress
              id="strength"
              value={powerstats.strength}
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroFeatured;
