import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyAlI8TlnfUg8zcbAhu64-xnoBbQA7mkmWs",
	authDomain: "pockemon-game-1d250.firebaseapp.com",
	databaseURL: "https://pockemon-game-1d250-default-rtdb.firebaseio.com",
	projectId: "pockemon-game-1d250",
	storageBucket: "pockemon-game-1d250.appspot.com",
	messagingSenderId: "122625248010",
	appId: "1:122625248010:web:724e51672d22fed89c48f3"
  };

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;