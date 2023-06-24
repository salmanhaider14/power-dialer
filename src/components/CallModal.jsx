import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaUserCircle } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import "./style.css";
function CallModal({ show, onHide, selectedContact }) {
  const name =
    selectedContact && (selectedContact.name || selectedContact.first_name);
  const phone = selectedContact && selectedContact.phone;

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      centered
      dialogClassName="custom-modal-width"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Calling....
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="call-interface">
        <div className="d-flex justify-content-center mb-3">
          <FaUserCircle size={80} className="text-secondary" />
        </div>
        <h4 className="text-center text-white">{name}</h4>
        <h4 className="text-center text-white"> {phone}</h4>
        <p className="text-center pt-3 text-white">00:00</p>
        <div className="d-flex justify-content-center mb-3 ">
          <Button variant="danger">
            <ImPhoneHangUp size={30} onClick={onHide} />
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CallModal;
