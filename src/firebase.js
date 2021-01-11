import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyATnN6VLOJ9dCBY7F4Sb-SAHbuGxmtYf7s',
	authDomain: 'react-fcm-pwa-test.firebaseapp.com',
	projectId: 'react-fcm-pwa-test',
	storageBucket: 'react-fcm-pwa-test.appspot.com',
	messagingSenderId: '757390291651',
	appId: '1:757390291651:web:05657b2bcdd851cd456876',
};

firebase.initializeApp(config);

export default firebase;
