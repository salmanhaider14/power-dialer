import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
import BasicExample from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: "#f0f7f6", minHeight: "90vh" }}>
      <BasicExample />
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <h1 className="mb-4">Privacy Policy</h1>

            <p>
              At PROSPIRE, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines how we collect, use, and protect the information
              you provide to us when using PROSPIRE.
            </p>

            <h2>Information We Collect</h2>

            <p>
              When you use PROSPIRE, we may collect the following types of
              information:
            </p>

            <ul>
              <li>
                <strong>Personal Information:</strong> We may collect personal
                information such as your name, email address, phone number, and
                other contact details when you sign up for an account or contact
                us for support.
              </li>
              <li>
                <strong>Usage Information:</strong> We may collect information
                about your use of the app, including the features you use, the
                calls you make, and the interactions you have with the app.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect information
                about the device you use to access PROSPIRE, such as your device
                type, operating system, and browser information.
              </li>
              <li>
                <strong>Log Data:</strong> Our servers automatically record
                certain information when you use PROSPIRE, including your IP
                address, app usage data, and crash reports.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>

            <p>
              We may use the information we collect for the following purposes:
            </p>

            <ul>
              <li>
                To provide and improve PROSPIRE, including personalizing your
                experience, enhancing app features, and optimizing app
                performance.
              </li>
              <li>
                To communicate with you, respond to your inquiries, and provide
                customer support.
              </li>
              <li>
                To send you important updates, notifications, and promotional
                materials related to PROSPIRE.
              </li>
              <li>
                To analyze app usage patterns, monitor app performance, and
                gather statistical information to improve our services.
              </li>
              <li>
                To enforce our terms of service and protect the rights,
                property, and safety of PROSPIRE and its users.
              </li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>

            <p>
              We may share your personal information with third parties in the
              following circumstances:
            </p>

            <ul>
              <li>
                With your consent or as necessary to fulfill your specific
                requests or instructions.
              </li>
              <li>
                With our trusted service providers and business partners who
                assist us in operating PROSPIRE and delivering our services to
                you. These third-party providers are bound by strict
                confidentiality agreements and are prohibited from using your
                personal information for any other purposes.
              </li>
              <li>
                When required by law, legal process, or government request, or
                to protect the rights, property, or safety of PROSPIRE, its
                users, or others.
              </li>
            </ul>

            <h2>Data Security</h2>

            <p>
              We take the security of your personal information seriously and
              have implemented appropriate technical and organizational measures
              to protect it. However, please note that no method of transmission
              over the internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>

            <h2>Children's Privacy</h2>

            <p>
              PROSPIRE is not intended for use by individuals under the age of
              13. We do not knowingly collect personal information from children
              under 13. If you become aware that your child has provided us with
              personal information without your consent, please contact us, and
              we will promptly delete the information from our records.
            </p>

            <h2>Changes to this Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              we make will be posted on this page, and we will notify you of any
              significant changes by email or through PROSPIRE. We encourage you
              to review this Privacy Policy periodically for any updates.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the privacy practices of PROSPIRE, please
              contact us at [contact email/phone].
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
