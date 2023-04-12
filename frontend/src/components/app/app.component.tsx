import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './app.component.css';
import { ApolloProvider } from '@apollo/client';
import SearchBar from '../layout/search.bar';
import AddBtn from '../layout/add.btn';
import Trip from '../trips/main.trip';


import Header from '../header/header.component';
import { BrowserRouter } from 'react-router-dom';


const App: React.FC = () => {
    return (

        <Router>
                <Header />
                <AddBtn />
                <Trip />

        </Router>   
       
    );
}

export default App;