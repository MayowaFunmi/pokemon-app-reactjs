import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Card = ({ pokemon }) => {
  //console.log("pokemon =", pokemon)
  return (
    <React.Fragment>
      {pokemon.map((item) => {
        return (
          <React.Fragment key={`${item.id}-${item.name}`}>
            <div className="pokeItem">
              <div className="pokeNameContainer centered">
                <p>
                  {item.name.toUpperCase()} {item.id}
                </p>
              </div>
              <div className="viewImageContainer centered">
                <Link to={`/details/${item.name}`}>
                  <LazyLoadImage
                    src={item.sprites.front_default}
                    loading="lazy"
                    alt={item.name}
                  />
                </Link>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
