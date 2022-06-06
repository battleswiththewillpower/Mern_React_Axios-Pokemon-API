import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Main = () => {
    const [pokemon, setPokemon] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false)


    // alert("Ashley for the win $$$$$$")

    useEffect(() => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
                .then(response=>{setPokemon(response.data.results)})
                .catch(err=>console.log(err))
    }, []);

    const handleButton=()=>{
            // alert("pokemon")
            setButtonClicked(!buttonClicked)
    }


    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    //       .then(response => {
    //         return response.json();
    //     }).then(jsonResponse => {
    //         console.log(jsonResponse);
    //         setPokemon(jsonResponse.results)
    //     }).catch(err=>{
    //         console.log(err);
    //     });

  return (
    <div>
        <h1>Pokémon</h1>
        <button onClick={handleButton}>Fetch Pokemon</button>

      { buttonClicked&&
          pokemon.map((eachPoke, i) =>{
              return(
                  <div key={i}>
                      {eachPoke.name}
                  </div>
              )
          })
      }


    </div>  
    
    )
}

export default Main