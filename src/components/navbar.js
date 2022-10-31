import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div className="nvdiv">
      <Navbar  expand="lg">
      <Container className="navbar1"> 
      <h3 className="title">URL SHORTENER</h3>
      <Nav className=" butns">
          <Nav.Link href="/signup">
            <Button>SignUp</Button>
          </Nav.Link>
          <Nav.Link href="/login">
            <Button>SignIn</Button>
          </Nav.Link>
        </Nav>
   
       </Container>
    </Navbar>
    
    </div>
  );
}

export default NavBar;
