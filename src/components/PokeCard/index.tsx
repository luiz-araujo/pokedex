import React from 'react';

import { Container } from './styles';

const POKEMON_API =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

interface Request {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

const PokeCard: React.FC<Request> = ({ id, name, type, base_experience }) => {
  const imgSrc = `${POKEMON_API}${String(id).padStart(3, '0')}.png`;

  return (
    <Container>
      <div className="details">
        <h2>{name}</h2>
        <p>{base_experience}</p>
        <p>{type}</p>
        <img src={imgSrc} alt={name} />
        <img src={imgSrc} alt={name} />
      </div>
    </Container>
  );
};

export default PokeCard;
