import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoCall } from "react-icons/io5";
import { auth } from "../../firebase";
import { BiLogOut } from "react-icons/bi";

function BasicExample() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Clear the user state and any user-related data
        setUser(null);
        // You can also clear any additional data stored in local storage
        localStorage.removeItem("user");
      })
      .catch((error) => {
        // Handle any errors that occur during the sign out process
        console.error("Error occurred during sign out:", error);
      });
  };
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-success">
          <IoCall size={25} className="me-2" /> Power Dialer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto fw-bold text-success ">
            <Nav.Link href="/" className="text-success">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-success">
              About Us
            </Nav.Link>
            <Nav.Link href="/privacy-policy" className="text-success">
              Privacy Policy
            </Nav.Link>
          </Nav>
          <Nav.Link className="text-success" onClick={handleLogout}>
            <BiLogOut size={25} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
