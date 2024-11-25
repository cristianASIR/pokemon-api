import React, { useState, useEffect } from 'react';
import Tarjeta from './cards';

const Generacion = ({ inicio, fin }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const randomIds = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * (fin - inicio + 1) + inicio)
      );
      const responses = await Promise.all(
        randomIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
            res.json()
          )
        )
      );
      setPokemonList(
        responses.map((data) => ({
          id: data.id,
          name: data.name,
          img: data.sprites.other['official-artwork'].front_default,
        }))
      );
      setLoading(false);
    };
    fetchPokemon();
  }, [inicio, fin]);

  if (loading) return <p>Cargando Pokémon...</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {pokemonList.map((pokemon) => (
        <Tarjeta
          key={pokemon.id}
          titulo={pokemon.name}
          texto={`ID: ${pokemon.id}`}
          imagen={pokemon.img}
          botonTexto="Ver detalles"
        />
      ))}
    </div>
  );
};

export default Generacion;