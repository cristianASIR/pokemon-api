import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import Tarjetas from "./Tarjetas";

function RandomPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      const randomIds = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101) + 252);
      console.log('IDs aleatorios:', randomIds);
  
      try {
        const promises = randomIds.map(id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
        const responses = await Promise.all(promises);
  
        responses.forEach(response => {
          console.log('Respuesta de la API:', response.data);
          // Verifica si la propiedad sprites.front_default existe y es una cadena
          if (response.data.sprites && typeof response.data.sprites.front_default === 'string') {
            // ...
          } else {
            console.error('Error: La propiedad sprites.front_default no existe o no es una cadena');
          }
        });
  
        setPokemons(responses.map(response => response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error al obtener los datos de los Pokémon");
      }
    };

    getPokemons();
  }, []);

  return (
    <Container className="shadow gb-danger mt-3">
      {error && <p>{error}</p>}
      <Row className="mt-3">
        {pokemons.map((pok, i) => (
          <Tarjetas key={i} poke={pok} />
        ))}
      </Row>
    </Container>
  );
}

export default RandomPokemon;