import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/index'
import Quote from './components/Contact/index'
import Info from './components/InfoContainers/info'
import Footer from './components/Footer/index'
import ContactContainer from './components/ContactContainer/index'
import Certificate from './components/Certification';
import Carousel from './components/Carousel/index'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Info /> 
                    <Certificate />
                    <ContactContainer />
                </Route>
                <Route exact path="/services">
                    <Carousel />
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