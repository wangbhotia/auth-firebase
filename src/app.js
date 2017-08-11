import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyBCh5mgzTrV8ePE9wjVJgQxnW8G5edFJzo',
	    authDomain: 'auth-afd42.firebaseapp.com',
	    databaseURL: 'https://auth-afd42.firebaseio.com',
	    projectId: 'auth-afd42',
	    storageBucket: 'auth-afd42.appspot.com',
	    messagingSenderId: '215404307083'
	  });
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;