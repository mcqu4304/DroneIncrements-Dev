import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="align-navbar">
      <Nav.Link href="/">Incremental Recommendations</Nav.Link>
      <NavDropdown title="Build Guides" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/getting-started">Getting Started</NavDropdown.Item>
        <NavDropdown.Item href="/approaching-amateur">Approaching Amateur</NavDropdown.Item>
        <NavDropdown.Item href="/mastering-mediocre">Mastering Mediocre</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/featured">Featured</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className = "align-navbarLinks">
      <Nav.Link href="/feedback">Feedback</Nav.Link>
      <Nav.Link href="/about">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;