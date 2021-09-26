import React, { useRef } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import './assets/css/custom.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Error from './pages/404';
import CoinInfo from './pages/coin-info';
import Contact from './pages/contact';
import CourseDetail from './pages/course-detail';
import Faq from './pages/faq';
import Home from './pages/home';
import Course from './pages/home/components/Course';
import Payment from './pages/payment';
import Profile from './pages/profile';
import Project from './pages/project';
import Register from './pages/register';
import Team from './pages/team';

function App() {
    let openLoginRef = useRef();

    function _openLogin(){
        openLoginRef.current.open()
    }
    return ( 
        <BrowserRouter>
            <Header />
            {/* <Home /> */}
            {/* <Team /> */}
            {/* <button onClick={_openLogin} style={{ marginTop: 100, marginBottom: 100}}>Open Login</button> */}
            <Switch>
                <Route path="/coin-info" component={CoinInfo}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/team" component={Team}/>
                <Route path="/faq" component={Faq}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/project" component={Project}/>
                <Route path="/register" component={Register}/>
                <Route path="/course/:slug" component={CourseDetail}/>
                <Route path="/course" component={Course}/>
                <Route exact path="/" component={Home}/>
                <Route component={Error}/>
            </Switch>
            <Footer />
            <Login ref={openLoginRef} />
        </BrowserRouter>
    );
}

export default App