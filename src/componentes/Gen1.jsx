import React, { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, InputGroupText, Input } from "reactstrap";
import axios from "axios";
import Tarjetas from "../componentes/Tarjetas";

function RandomPokemon() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
     const getPokemons = async () => {
       const limit = 10;
       const offset = Math.floor(Math.random() * 151); // Genera un offset aleatorio
       const liga = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
       try {
         const response = await axios.get(liga);
         setPokemons(response.data.results);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };

     getPokemons();
   }, []);

  return (
    <Container className="shadow gb-danger mt-3">
      <Row className="mt-3">
        {pokemons.map((pok, i) => (
          <Tarjetas poke={pok} key={i} />
        ))}
      </Row>
    </Container>
  );
}

export default RandomPokemon;