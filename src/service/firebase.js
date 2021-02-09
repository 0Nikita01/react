import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyDg4tP9wqUTV4mQoFde2nkS6g3uzFk28PY",
	authDomain: "pokemon-game-3cae4.firebaseapp.com",
	databaseURL: "https://pokemon-game-3cae4-default-rtdb.firebaseio.com",
	projectId: "pokemon-game-3cae4",
	storageBucket: "pokemon-game-3cae4.appspot.com",
	messagingSenderId: "988476748574",
	appId: "1:988476748574:web:1c2f1cb8bacde20c034f0f"
  };

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;