import React, { Component } from "react";
import "./help_modal.scss";
import { Modal, Button } from "react-bootstrap";
import infographic from "../../../logos/help_modal_infographic.PNG";
import closeButton from "../../../logos/remove_1.png";

class HelpModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div>
        <div className="order-list__help" onClick={this.handleShow}>
          Jak skomponować szkolenie?
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Button
              onClick={this.handleClose}
              className="help-modal__close-btn"
            >
              <img src={closeButton} alt="zamknij" />
            </Button>
            <img
              src={infographic}
              alt="Inforgrafika - jak skomponować szkolenie"
              className="help-modal__infograpgic"
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default HelpModal;
