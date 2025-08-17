const { HashRouter, NavLink, Route, Switch } = ReactRouterDOM;

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <NavLink
                    exact to="/"
                    activeClassName="active"
                    activeStyle={{ backgroundColor: '#e0e0e0' }}
                >Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about"
                    activeClassName="active"
                    activeStyle={{ backgroundColor: '#e0e0e0' }}
                >About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/contact"
                    activeClassName="active"
                    activeStyle={{ backgroundColor: '#e0e0e0' }}
                >Contact
                </NavLink>
            </li>
        </ul>
    </nav>
);

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Us Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => (
    <HashRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </HashRouter>
);

// Export Navbar if you want to use it in other files
// export default Navbar;

// In another file
// import Navbar from './navbarBabel.js';
// Render navbar to the div with id 'navbar'
//ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('navbar'));