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
        <Navbar.Brand
          href="/"
          className="fw-bold "
          style={{ color: "#19A7CE" }}
        >
          <img src="/logo.png" alt="" width={120} />
          PROSPIRE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto fw-bold  ">
            <Nav.Link href="/" style={{ color: "#19A7CE" }} className="me-2">
              HOME
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: "#19A7CE" }}
              className="me-2"
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              href="/privacy-policy"
              style={{ color: "#19A7CE" }}
              className="me-2"
            >
              PRIVACY POLICY
            </Nav.Link>
          </Nav>
          <Nav.Link onClick={handleLogout} style={{ color: "#19A7CE" }}>
            <BiLogOut size={30} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
