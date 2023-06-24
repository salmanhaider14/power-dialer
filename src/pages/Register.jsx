import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineKey, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Container, Form, Button } from "react-bootstrap";
import "./style.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors("Password is unmatched");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });
      navigate("/login");
      setErrors(null);
      // Redirect to the home page
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <div className="Home">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h1 className="mb-4">Register Here!!!</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>
                <AiOutlineUser color="black" size={20} /> Username
              </Form.Label>
              <Form.Control
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <AiOutlineMail color="black" size={20} /> Email
              </Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <AiOutlineKey color="black" size={20} /> Password
              </Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                Login
              </Link>
            </p>
            {errors && <div className="alert alert-danger">{errors}</div>}
            <Button type="submit" variant="primary " className="w-50 h-100 ">
              Register
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
