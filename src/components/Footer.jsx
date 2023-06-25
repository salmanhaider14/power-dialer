import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-basic mt-5">
      <footer>
        <div className="social">
          <a href="#">
            {" "}
            <FaInstagram color="red" />
          </a>
          <a href="#">
            {" "}
            <FaSnapchat color="yellow" />
          </a>
          <a href="#">
            {" "}
            <FaTwitter size={25} color="skyblue" />
          </a>
          <a href="#">
            {" "}
            <FaFacebook color="navy" />
          </a>
        </div>

        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>

          <li className="list-inline-item">
            <a href="/about">About</a>
          </li>

          <li className="list-inline-item">
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>

        <p className="copyright">
          {" "}
          <img src="/logo.png" alt="" width={100} />
          Company PROSPIRE © 2023
        </p>
      </footer>
    </div>
  );
};

export default Footer;
