// import React from 'react'
import Tarjetas from "../componentes/Tarjetas"

  return (
    <Container className="shadow gb-danger mt-3">
        
        <Row className="mt-3">
            { pokemons.map( (pok,i)=>(
                <Tarjetas poke={pok} key={i}/>
            )) }
        </Row>
    </Container>
)


export default Index
