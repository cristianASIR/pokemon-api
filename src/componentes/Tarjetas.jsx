import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Card, CardBody, CardImg, Badge } from 'reactstrap';

const Tarjetas = ({ poke }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(poke.url);
        setPokemon(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setIsLoading(false);
      }
    };

    getPokemon();
  }, [poke]);

  return (
    <Col sm="4" lg="3" className="mb-3">
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <Card className="shadow border-4 border-warning">
          {/* Aquí puedes mostrar la imagen y otros detalles del Pokémon */}
          {poke.sprites && poke.sprites.front_default && (
            <CardImg src={poke.sprites.front_default} alt={poke.name} height="130" className="p-2" />
          )}
          <CardBody className="text-center">
            <Badge pill color="danger">#{poke.id}</Badge>
            <label className="fs-4 text-capitalize">{poke.name}</label>
          </CardBody>
        </Card>
      )}
    </Col>
  );
};

export default Tarjetas;