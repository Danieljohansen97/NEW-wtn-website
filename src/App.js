import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Component imports
import HomePage from "./components/homePage/HomePage";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
// Bootstrap imports
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Widae Taekkyeon Norge</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar" />
            <Navbar.Collapse id="responsive-navbar">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Hjem
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Om oss
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery">
                  Bilder
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Kontakt Oss
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
