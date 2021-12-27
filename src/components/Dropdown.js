import React, {useState, useEffect} from "react";
import Card from './Card'
import pokemonApi from '../api/pokemonApi';
import '../css/dropdown.css'


const Dropdown= ()=>{
const [results, setResults] = useState([])
const [pokemonSelected, setPokemonSelected]= useState({})
const [inputChange, setInputChange] = useState('1')
console.log(pokemonSelected)

  useEffect(() => {
    //fetch all the names of pokemon 1 to 898
    const fetchPokemon = async ()=>{
      const {data} = await pokemonApi.get(`pokemon?limit=898&offset=0`);
     
      setResults([...data.results])
      
      
    }
    
    fetchPokemon();
  }, [])

  useEffect(()=>{
    const fetchPoke = async ()=>{
      const {data} = await pokemonApi.get(`pokemon/${inputChange}`)
      
      setPokemonSelected(data)
      
    }
    
    if(inputChange ){
      fetchPoke()
    }
    

  }, [inputChange])

    const pokemonList = results.map((pokemon, index)=>{
      
      return(
      
       <option value={index+1} key={pokemon.name}>{pokemon.name}</option>
     )
     })
  
     const onInputChange = (poke)=>{
      
      setInputChange(poke.target.value)
     }

  return(
    <div className='dropdown-container'>
      <div className="select">
      <select  onChange={(poke)=>onInputChange(poke)}>
        
        {pokemonList}
      </select>
      </div>
      <div className="card-container" >
        <Card pokemonSelected={pokemonSelected}></Card>
      </div>
    </div>
  )
}

export default Dropdown;