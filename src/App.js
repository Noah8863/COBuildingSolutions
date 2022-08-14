import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Quote from './components/Quote'
import Lumber from './components/Lumber'
import Carousel from './components/Carousel'
import Info from './components/textInfo'
import Footer from './components/Footer'
import Commerical from './components/CommericalPage'
import Residential from './components/ResidentialPage'
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