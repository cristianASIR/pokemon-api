// import React from 'react'
import {Container,Row,Col,InputGroup,InputGroupText,Input} from "reactstrap"
import axios from "axios"
import { useState,useEffect } from "react"
import Tarjetas from "../componentes/Tarjetas"
const Index = () => {
    const [pokemons,setPokemons] = useState([]);
    const [offset,setOffset] = useState (0);
    const [limit,setLimit] = useState (10);
    useEffect( () =>{
        getPokemons(offset)
    },[])
    const getPokemons = async(o) => {
        const liga = 'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+o;
        try {
            const response = await axios.get(liga);
            const respuesta = response.data;
            setPokemons(respuesta.results);
            console.log(pokemons);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        // axios.get(liga).then( async(response) =>{
        //     const respuesta = response.data;
        //     setPokemons(respuesta.results);
        //     console.log(pokemons);
            
        // })
    }
  return (
    <Container className="shadow gb-danger mt-3">
        <Row>
            {/* <Col>
                <InputGroup className="mt-3 mb-3">
                <InputGroupText><i className="fa-solid fa-search"/></InputGroupText>
                <Input placeholder="Generaciones"/>
                </InputGroup>
            </Col> */}
        </Row>
        <Row className="mt-3">
            { pokemons.map( (pok,i)=>(
                <Tarjetas poke={pok} key={i}/>
            )) }
        </Row>
    </Container>
)
}

export default Index
