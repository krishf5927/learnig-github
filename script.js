async function fetchdata(){
    try{
      const PokemonName=document.getElementById("pokemonname").value.toLowerCase();
      const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);
      if(response.ok==false){
        throw new Error("could not fetch resources");
      }
      const data=await response.json();
      const pokemonsprite=data.sprites.front_default;
      const imgeElement=document.getElementById("imagesofpokemon");
      imgeElement.src=pokemonsprite;
      imgeElement.style.display="block";
    }
    catch(error){
      console.error(error);
    }
}
