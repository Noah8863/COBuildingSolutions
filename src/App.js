import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/index'
import Quote from './components/Contact/index'
import Lumber from './components/Lumber/lumber'
import Info from './components/InfoContainers/info'
import Footer from './components/Footer/index'
import Commerical from './components/CommericalPage/commerical'
import Residential from './components/ResidentialPage/residential'
import './App.scss';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Info /> 
                </Route>
                <Route exact path="/services">
                    <Info /> 
                </Route>
                <Route exact path="/quote">
                    <Quote />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;