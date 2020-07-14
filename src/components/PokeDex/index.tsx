import React from 'react';
import PokeCard from '../PokeCard';

import { Container } from './styles';

interface Request {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

interface PokemonProps {
  pokemon: Request[];
  exp: number;
  isWinner: boolean;
}

const PokeDex: React.FC<PokemonProps> = ({ pokemon, exp, isWinner }) => {
  const title = isWinner ? (
    <h1 className="winner">Winning Hand</h1>
  ) : (
    <h1 className="loser">Losing Hand</h1>
  );

  return (
    <Container>
      {title}
      <h4 className="total-exp">Total Experience: {exp}</h4>
      <ul className="cards">
        {pokemon.map((p) => (
          <PokeCard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </ul>
    </Container>
  );
};

export default PokeDex;
