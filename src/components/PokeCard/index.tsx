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
      <h1 className="title">{name}</h1>
      <div className="image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="data">Type: {type}</div>
      <div className="data">EXP: {base_experience}</div>
    </Container>
  );
};

export default PokeCard;
