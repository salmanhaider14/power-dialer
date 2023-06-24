import React, { useEffect, useState } from "react";
import ContactImporter from "../components/ContactImporter";
import Navbar from "../components/Navbar";
import "./style.scss";
import Login from "./Login";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";

const Home = () => {
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  auth.onAuthStateChanged(function (user) {
    setIsLoggedIn(!!user);
  });

  // Subscribe to changes in the user state

  return (
    <div className="Home">
      {isLoggedin ? (
        <>
          <Navbar />
          <ContactImporter />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
