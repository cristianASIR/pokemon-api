import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Card, CardBody, CardFooter, CardImg, Badge } from "reactstrap";
import { Link } from "react-router-dom";

const Tarjetas = ({ poke }) => {
  const [pokemon, setPokemon] = useState({});
  const [imagen, setImagen] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const getPokemon = async () => {
      setIsLoading(true); // Mostrar el GIF mientras se carga
      try {
        const response = await axios.get(poke.url);
        setPokemon(response.data);
        setImagen(response.data.sprites.front_default);
        setIsLoading(false); // Ocultar el GIF y mostrar la imagen
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setIsLoading(false); // Ocultar el GIF en caso de error
      }
    };

    getPokemon();
  }, [poke]);

  return (
    <Col sm="4" lg="3" className="mb-3">
      <Card className="shadow border-4 border-warning">
        {isLoading && ( // Mostrar el GIF solo si isLoading es true
          <CardImg src="/img/pokeball.gif" height={200} className="p-3" />
        )}
        {!isLoading && ( // Mostrar la imagen del Pokémon solo si isLoading es false
          <CardImg src={imagen} height="130" className="p-2" />
        )}
        <CardBody className="text-center">
          <Badge pill color="danger">#{pokemon.id}</Badge>
          <label className="fs-4 text-capitalize">{pokemon.name}</label>
        </CardBody>
        
      </Card>
    </Col>
  );
};

export default Tarjetas;