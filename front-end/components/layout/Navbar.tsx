import { Container, Navbar as NavbarBootrap } from "react-bootstrap";

interface INavProps {
  className?: string;
}
const Navbar = ({ className }: INavProps) => {
  return (
    <NavbarBootrap bg="light" expand="lg" className={className}>
      <Container className="container-fluid">
        <NavbarBootrap.Brand href="#home">NhaThueCanTho</NavbarBootrap.Brand>
        <NavbarBootrap.Toggle aria-controls="basic-navbar-nav" />
        {/* <NavbarBootrap.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBootrap.Collapse> */}
      </Container>
    </NavbarBootrap>
  );
};

export default Navbar;
