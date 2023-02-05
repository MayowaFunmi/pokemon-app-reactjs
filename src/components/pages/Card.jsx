import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon }) => {
  //console.log("pokemon =", pokemon)
  return (
    <React.Fragment>
      {pokemon.map((item) => {
        return (
          <div key={item.name}>
            <div className="pokeItem">
              <div className="pokeNameContainer centered">
                <p>
                  {item.name.toUpperCase()} {item.id}
                </p>
              </div>
              <div className="viewImageContainer centered">
                <Link to={`/details/${item.name}`}>
                  <img src={item.sprites.front_default} alt={item.name} />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
