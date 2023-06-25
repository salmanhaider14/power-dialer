import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AiOutlineUser, AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("user", JSON.stringify(user));
        }
      );

      setErrors(null);
      navigate("/");
    } catch (error) {
      setErrors(error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="Home">
      <Container
        className="d-flex align-items-center justify-content-center Home"
        style={{ minHeight: "100vh" }}
      >
        {" "}
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <img src="/logo.png" alt="" width={300} />
          <h1 className="mb-4" style={{ color: "#19A7CE" }}>
            {" "}
            LOGIN
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>
                <AiOutlineMail color="black" size={20} /> Email
              </Form.Label>
              <Form.Control
                type="email"
                className="form-control mb-3"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {" "}
                <AiOutlineKey color="black" size={20} /> Password
              </Form.Label>
              <Form.Control
                type="password"
                className="form-control mb-3"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <p>
              Don't have any account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </p>
            {errors && <div className="alert alert-danger">{errors}</div>}
            <Button
              type="submit"
              variant="info"
              size="lg"
              className="w-50 h-100 "
            >
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
