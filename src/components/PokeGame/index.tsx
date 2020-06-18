import React, { useState, useEffect } from 'react';
import PokeDex from '../PokeDex';
import api from '../../services/api';

interface Request {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

const PokeGame: React.FC = () => {
  const [hand1, setHand1] = useState<Request[]>([]);
  const [hand2, setHand2] = useState<Request[]>([]);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await api.get('/pokemons');
      const pokemons = response.data;

      pokemons.sort(() => Math.floor(Math.random() * pokemons.length));
      const halfwayThrough = Math.floor(pokemons.length / 2);

      setHand1(pokemons.slice(0, halfwayThrough));
      setHand2(pokemons.slice(halfwayThrough, pokemons.length));
    }

    loadPokemons();
  }, []);

  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <>
      <PokeDex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <PokeDex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </>
  );
};

export default PokeGame;
