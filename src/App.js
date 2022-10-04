import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/navbar'
import Quote from './components/Quote/quote'
import Lumber from './components/Lumber/lumber'
import Carousel from './components/Carousel/Carousel'
import Info from './components/InfoContainers/info'
import Footer from './components/Footer/footer'
import Commerical from './components/CommericalPage/commerical'
import Residential from './components/ResidentialPage/residential'
import './App.scss';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Carousel /> 
                    <Info /> 
                </Route>
                 <Route exact path="/quote">
                    <Quote />
                </Route>
                <Route exact path="/lumber">
                    <Lumber />
                </Route>
                <Route exact path="/commerical">
                    <Commerical />
                </Route> 
                <Route exact path="/residential">
                    <Residential />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;