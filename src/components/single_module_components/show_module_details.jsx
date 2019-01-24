import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ShowModuleDetails extends Component {
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
    const details = this.props.details;
    return (
      <div>
        <div className="single-module__details" onClick={this.handleShow}>
          <div className="single-module__details-info-display">Szczegóły </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="single-module__details-modal-header">
              {this.props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {details.map(e => (
              <li
                className="single-module__details-modal-single-detail"
                key={e}
              >
                {e}
              </li>
            ))}
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

export default ShowModuleDetails;
