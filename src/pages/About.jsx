import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner, Navbar } from "react-bootstrap";
import "./style.scss";
import Footer from "../components/Footer";
import BasicExample from "../components/Navbar";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ backgroundColor: "#f0f7f6", minHeight: "90vh" }}>
      <BasicExample />
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <h1 className="mb-4">About Us</h1>

            <p>
              Welcome to <strong>PROSPIRE</strong>! We are dedicated to
              revolutionizing the way businesses execute cold calling and manage
              their customer relationships. Our powerful and user-friendly power
              dialer application is designed to help you maximize your
              productivity, connect with prospects quickly, and streamline your
              sales processes. With our power dialer, you can import your
              contact lists effortlessly. Whether you have a CSV file or JSON
              data, our intuitive interface allows you to easily upload and
              manage your contacts. Say goodbye to manual data entry and save
              valuable time, as our system takes care of the heavy lifting for
              you.
            </p>

            <p>
              Once your contacts are imported, our power dialer takes center
              stage. Hit the dial button, and watch as our advanced dialing
              algorithm begins its magic. Our system dials each contact on your
              list automatically, allowing you to reach out to a high volume of
              prospects in a fraction of the time it would take manually. And if
              a contact doesn't pick up after two attempts, our power dialer
              seamlessly moves on to the next one, ensuring optimal efficiency
              in your calling efforts.
            </p>

            <p>
              We understand the importance of tracking and managing customer
              interactions. That's why our power dialer comes equipped with call
              recording capabilities. When a call is answered, our system
              automatically records it for your convenience. You can review the
              recordings later for training purposes, quality assurance, or to
              gather valuable insights. What's more, our power dialer seamlessly
              integrates with popular CRM systems, allowing you to effortlessly
              send call recordings and associated data into your CRM. This
              integration ensures a streamlined workflow and helps you stay
              organized.
            </p>

            <p>
              We take pride in delivering a seamless user experience. Our power
              dialer application is built with the latest technologies, ensuring
              a responsive and intuitive interface across devices. You can
              access our power dialer from anywhere, whether you're in the
              office or on the go, making it convenient for sales teams and
              professionals who are always on the move.
            </p>

            <p>
              We are committed to providing you with a reliable, efficient, and
              user-centric power dialer solution. We are continuously improving
              our application, incorporating user feedback, and staying up to
              date with industry trends to meet your evolving needs. Take your
              cold calling game to the next level with <strong>PROSPIRE</strong>
              . Experience the power of increased productivity, streamlined
              calling, and enhanced customer relationship management. Join us
              today and unlock the potential of your sales efforts. Welcome to a
              new era of efficient and effective cold calling with{" "}
              <strong>PROSPIRE</strong>!
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
