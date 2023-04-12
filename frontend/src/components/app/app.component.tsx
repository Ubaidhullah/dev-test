import React, { Fragment } from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './app.component.css';
import { ApolloProvider } from '@apollo/client';
import SearchBar from '../layout/search.bar';
import AddBtn from '../layout/add.btn';
import Trip from '../trips/main.trip';
import AddTripModal from '../trips/add.trip';
import Header from '../header/header.component';
import { BrowserRouter } from 'react-router-dom';
import  M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';


const App: React.FC = () => {
    return (

        <Router>
            <Fragment>
                <Header />
                <div className='container'>
                <AddBtn />
                <AddTripModal />
                <Trip />
                </div>
            </Fragment>
        </Router>   
       
    );
}

export default App;