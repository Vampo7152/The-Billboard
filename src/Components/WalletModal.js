import React from "react";
import { Modal } from "react-bootstrap";

export default function WalletModal({
  metaClick,
  walletConnectClick,
  show,
  handleClose,
}) {
  return (
    <Modal style={{ color: "black" }} show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Connect Wallet</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex align-items-center justify-content-around">
          <div
            className="d-flex flex-column align-items-center pointer"
            onClick={metaClick}
          >
            <img
              src={require("../assets/metamask.svg").default}
              alt="metamask logo"
              width="40"
              height="40"
            />
            Metamask
          </div>
          <div
            className="d-flex flex-column align-items-center pointer"
            onClick={walletConnectClick}
          >
            <img
              src={require("../assets/walletconnect.svg").default}
              alt="metamask logo"
              width="40"
              height="40"
            />
            WalletConnect
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
