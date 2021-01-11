import './App.css';
import firebase from './firebase';

function App() {
	const messaging = firebase.messaging();
	Notification.requestPermission()
		.then(() => {
			return messaging.getToken();
		})
		.then((token) => {
			console.log(`Token:\n${token}`);
		});

	return (
		<div className="App">
			<h1>PWA with Push Notifications</h1>
		</div>
	);
}

export default App;
