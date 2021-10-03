import React, { useRef } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import './assets/css/custom.css';
import routers from './routers';
import renderRouters from './core/routerConfig';


function App() {
    let openLoginRef = useRef();

    function _openLogin(){
        openLoginRef.current.open()
    }
    return ( 
        <BrowserRouter>
            {renderRouters(routers)}
        </BrowserRouter>
    );
}

export default App