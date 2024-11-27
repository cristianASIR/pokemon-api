import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import Tarjetas from "../componentes/Tarjetas";

function RandomPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getPokemons = async (id) => {
      //const offset = Math.floor(Math.random() * (240 - 150 +1 ) + 150); // Genera un offset aleatorio
      setIsLoading(true);
      //setError(null);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemons(prevPokemons => [...prevPokemons, response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    const diferentes = async () => {
      const limit = 10;
      const pokemonIds = [];
      while (pokemonIds.length < limit) {
        const randomId = Math.floor(Math.random() * (250 - 151 + 1)) + 151;
        if (!pokemonIds.includes(randomId)) {
          pokemonIds.push(randomId);
        }
      }
      return pokemonIds;
      //await Promise.all(pokemonIds.map(getPokemons));
    };
    const fetchData = async () => {
        const pokemonIds = await diferentes();
        for (const id of pokemonIds) {
          await getPokemons(id);
        }
      };
  
      fetchData();
  }, []);

  return (
    <Container className="shadow gb-danger mt-3">
      {isLoading && <p>Loading Pokemon...</p>}
      {error && <p>Error: {error.message}</p>}
      <Row className="mt-3">
        {pokemons.map((pok, i) => (
          <Tarjetas poke={pok} key={i} />
        ))}
      </Row>
    </Container>
  );
}

export default RandomPokemon;