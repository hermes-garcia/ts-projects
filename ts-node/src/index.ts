import {Pokemon} from "./decorators/pokemon";


const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander);

charmander.publicApi = 'Hermes'

charmander.savePokemonToDB(500)