import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

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
          <Modal.Header closeButton>
            <Modal.Title>{"Tytuł"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{"Body"}</h4>
            <p />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default HelpModal;
