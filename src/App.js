import React, {Component} from 'react';
import firebase from 'firebase';
import FileUpload from './FileUpload';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        });
    }

    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(result => console.log(`${result.user.email} Ha salido`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    renderLoginButton() {

        if (this.state.user) {
            //Si el usuario esta logeado
            return (
                <div>
                    <img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
                    <p>{this.state.user.displayName}</p>
                    <button onClick={this.handleLogout}>Salir</button>
                    <FileUpload/>
                </div>

            );
        } else {
            //Si no lo está
            return (
                <button onClick={this.handleAuth}>Login con google</button>
            );
        }


    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Pseudogram</h1>
                </header>
                <div className="App-intro">
                    {this.renderLoginButton()}
                </div>
            </div>
        );
    }
}

export default App;
