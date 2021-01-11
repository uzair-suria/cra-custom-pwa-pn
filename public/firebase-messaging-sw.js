importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

const fetchAssetPaths = async () => {
	let data = await fetch('./asset-manifest.json').then((res) => res.json());
	let dataFileKeys = Object.keys(data.files);
	let paths = data.entrypoints;
	dataFileKeys.forEach((item) => {
		paths.push(data.files[item]);
	});
	paths.push('/');
	return paths;
};

firebase.initializeApp({
	apiKey: 'AIzaSyATnN6VLOJ9dCBY7F4Sb-SAHbuGxmtYf7s',
	authDomain: 'react-fcm-pwa-test.firebaseapp.com',
	projectId: 'react-fcm-pwa-test',
	storageBucket: 'react-fcm-pwa-test.appspot.com',
	messagingSenderId: '757390291651',
	appId: '1:757390291651:web:05657b2bcdd851cd456876',
});

firebase.messaging();
