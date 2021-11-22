const loadPokemon = async (name) => {
  let result = await window.fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  let json = await result.json();
  let imgUrl = json.sprites.front_default;

  let imgElement = document.createElement("img");
  imgElement.src = imgUrl;
  imgElement.style.backgroundColor = "red";
  document.body.appendChild(imgElement);
  console.log("All done");
};

console.log("Page loaded, about to get jigglypuff");
loadPokemon("jigglypuff");
