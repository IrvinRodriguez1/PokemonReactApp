import React from "react";
import '../css/card.css'

const Card=({pokemonSelected})=>{
  console.log(pokemonSelected)
 
  let types =[];
  if(Object.keys(pokemonSelected).length){
   types= pokemonSelected.types.map(type =>{
    
      return(
        <span key={type.type.name}>{type.type.name}</span>
      )
    })
  }
  return(
  <div className="container">
      <div className="ui card">
   <div className="ui slide masked reveal image">
   <img className='visible content' src={Object.keys(pokemonSelected).length ? pokemonSelected.sprites.front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png'}alt='pokemon'/>
   <img className='hidden content' src={Object.keys(pokemonSelected).length ? pokemonSelected.sprites.front_shiny : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png'}alt='pokemon'/>
   </div>
   <div className="content">
    <h3 className="header">{pokemonSelected.name}</h3>
    <div className="meta">
      <span className="date">Type: {types}</span>
    </div>
   </div>
   </div>
  </div>
  )
}

export default Card;