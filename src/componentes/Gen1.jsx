import React, { useState, useEffect } from "react";
import axios from "axios";
import Tarjetas from "./Tarjetas";

function Gen1() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const promises = [];
      for (let i = 1; i <= 10; i++) {
        // Generamos números aleatorios entre 1 y 151
        const randomId = Math.floor(Math.random() * 151) + 1;
        promises.push(
          axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        );
      }

      const results = await Promise.all(promises);
      setPokemon(results.map((result) => result.data));
    };

    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemon.map(poke => (
        <Tarjetas key={poke.id} poke={poke} />
      ))}
    </div>
  );
}

export default Gen1;
