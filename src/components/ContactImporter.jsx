import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { MdDelete, MdCall } from "react-icons/md";
import CallModal from "./CallModal";
import "./style.css";
import { FcContacts } from "react-icons/fc";

const ContactImporter = ({ onSave }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fieldHeaders, setFieldHeaders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (e) => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
    setSelectedFile(e.target.files[0]);
  };

  const handleImport = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        parseContacts(fileContent, selectedFile.type);
      };
      reader.readAsText(selectedFile);
    }
  };

  const parseContacts = (fileContent, fileType) => {
    if (fileType === "application/json") {
      const parsedData = JSON.parse(fileContent);
      setFieldHeaders(Object.keys(parsedData[0]));
      setContacts(parsedData);
    } else if (fileType === "text/csv") {
      // Implement CSV parsing logic here
      // You can use a library like papaparse (https://www.papaparse.com/) for CSV parsing
      // Here, we'll assume a simple parsing logic
      const lines = fileContent.split("\n");
      const headers = lines[0].split(",");
      const parsedContacts = [];
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",");
        const contact = {};
        for (let j = 0; j < headers.length; j++) {
          contact[headers[j]] = values[j];
        }
        parsedContacts.push(contact);
      }
      setFieldHeaders(headers);
      setContacts(parsedContacts);
    } else {
      throw new Error("Unsupported file type");
    }
  };

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleContactsPerPageChange = (e) => {
    setContactsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(indexOfFirstContact + index, 1);
    setContacts(updatedContacts);
  };
  const handleCallContact = (index) => {
    const selectedContactIndex = indexOfFirstContact + index;
    const selectedContact = contacts[selectedContactIndex];
    setSelectedContact(selectedContact);
    setModalShow(true);
  };

  const renderPaginationItems = () => {
    const pageNumbers = Math.ceil(contacts.length / contactsPerPage);
    const items = [];

    for (let number = 1; number <= pageNumbers; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div className="importer">
      <Container>
        <Form className="mt-4 mb-3">
          <Form.Group>
            <Form.Label className="mb-2">Import File (JSON or CSV)</Form.Label>
            <Form.Control
              type="file"
              accept=".json,.csv"
              ref={inputRef}
              onChange={handleFileChange}
              hidden
            />
          </Form.Group>
          <div
            style={{ cursor: "pointer" }}
            className="fw-semibold"
            onClick={handleUpload}
          >
            <FcContacts size={70} />{" "}
            {uploadedFileName ? uploadedFileName : "Upload"}
          </div>

          <Button variant="dark" onClick={handleImport} className="mt-3">
            Import Contacts
          </Button>
        </Form>

        {contacts.length > 0 && (
          <div>
            <h2 className="pb-3 pt-3 ">Imported Contacts</h2>
            <div className="d-flex align-items-center mb-3 mt-3">
              <Button variant="outline-success" size="lg" className="me-3">
                <MdCall />
              </Button>

              <h2 className="text-success">Call</h2>
            </div>

            <Table striped responsive className="custom-table">
              <thead>
                <tr>
                  {fieldHeaders.map((field, index) => (
                    <th key={index}>{field}</th>
                  ))}
                  <th>Call</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {currentContacts.map((contact, index) => (
                  <tr key={index}>
                    {fieldHeaders.map((field, index) => (
                      <td key={index}>{contact[field]}</td>
                    ))}
                    <td>
                      <Button
                        variant="success"
                        onClick={() => {
                          setModalShow(true);
                          handleCallContact(index);
                        }}
                      >
                        <MdCall />
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteContact(index)}
                      >
                        <MdDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Form.Group>
              <Form.Label>Contacts Per Page</Form.Label>
              <Form.Control
                as="select"
                value={contactsPerPage}
                onChange={handleContactsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </Form.Control>
            </Form.Group>
            <Pagination>{renderPaginationItems()}</Pagination>
          </div>
        )}
        <CallModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          selectedContact={selectedContact}
        />
      </Container>
    </div>
  );
};

export default ContactImporter;
