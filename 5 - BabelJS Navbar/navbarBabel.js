const { BrowserRouter, NavLink, Route, Switch } = ReactRouterDOM;

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <NavLink
                    to="/index.html"
                    exact
                    activeClassName="active"
                    activeStyle={{ backgroundColor: '#e0e0e0' }}
                >Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about.html"
                    exact
                    activeClassName="active"
                    activeStyle={{ backgroundColor: '#e0e0e0' }}
                >About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/contact.html"
                    exact
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
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/index.html" component={Home} />
            <Route path="/about.html" component={About} />
            <Route path="/contact.html" component={Contact} />
        </Switch>
    </BrowserRouter>
);

// Export Navbar if you want to use it in other files
// export default Navbar;

// In another file
// import Navbar from './navbarBabel.js';
// Render navbar to the div with id 'navbar'
//ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('navbar'));