import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import  Button  from "react-bootstrap/Button";
import  Nav  from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import  Container  from "react-bootstrap/Container";

const Header = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "gold" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={faVideoSlash} />
              <span style={{ marginLeft: "0.5rem", fontSize: "1.5rem", fontWeight: "" }}>
                MOVIE
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarscroll" />
          <Navbar.Collapse id="navbarrScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/watchlist">
                Watchlist
              </NavLink>
            </Nav>
  
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Button variant="outline-info" className="me-2">
                Login
              </Button>
              <Button variant="outline-info">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;
  