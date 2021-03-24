import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDoNm9JKvhLn9cn6FLlq5teCKwqb6oY9s8",
  authDomain: "pokemons-game-react.firebaseapp.com",
  databaseURL: "https://pokemons-game-react-default-rtdb.firebaseio.com",
  projectId: "pokemons-game-react",
  storageBucket: "pokemons-game-react.appspot.com",
  messagingSenderId: "436440157016",
  appId: "1:436440157016:web:81054c5ba1dab6cb25b32d"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }

  offPokemonSocket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (newPokemon, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    return this.database.ref('pokemons/' + newKey).set(newPokemon).then(() => cb());
  }

}

export default Firebase;