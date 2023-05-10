import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavMenu() {

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>

        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/page1">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/page2">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}