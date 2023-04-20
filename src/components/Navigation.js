import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MetalworxLogo from '../images/metalworx_logo.png';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid="md">
        <Navbar.Brand><a href={"/"}><img src={MetalworxLogo} width={250} alt='metal works logo' fluid /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
            <Nav.Link as={Link} to={"/machining"}>Machining</Nav.Link>
            <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
            <Nav.Link as={Link} to={"/castings"}>Castings</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;