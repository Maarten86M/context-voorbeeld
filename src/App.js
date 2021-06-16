import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Afspraak from "./pages/afspraak";
import Login from "./pages/login";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/afspraak-maken">Afspraak Maken</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/afspraak-maken'>
                        <Afspraak/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </header>
        </div>
    );
}

export default App;
