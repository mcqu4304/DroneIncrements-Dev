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
      <Nav.Link href="#recommendations">Incremental Recommendations</Nav.Link>
      <NavDropdown title="Build Guides" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Getting Started</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Approaching Amateur</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mastering Mediocre</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Featured</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className = "align-navbarLinks">
      <Nav.Link href="#feedback">Feedback</Nav.Link>
      <Nav.Link eventKey={2} href="#about">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;