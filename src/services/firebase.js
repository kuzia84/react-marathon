import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_JheDgSjEyNl1RPH70m94KChdpeiBZi0",
  authDomain: "pokemon-game-c856b.firebaseapp.com",
  databaseURL: "https://pokemon-game-c856b-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-c856b",
  storageBucket: "pokemon-game-c856b.appspot.com",
  messagingSenderId: "171842444460",
  appId: "1:171842444460:web:921505ef1c3f1b5b911309",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    });
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val());
  };

  postPokemon = (key, pokemon) => {
    this.database.ref("pokemons/" + key).set(pokemon);
  };

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child("pokemons").push().key;
    this.database.ref("pokemons/" + newKey).set(data);
  };
}

export default Firebase;
