import React from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"

export interface MessageModalProps {
  show: boolean
  onHide: () => void
  message: React.ReactNode | string
}

const MessageModal = ({ show, onHide, message }: MessageModalProps) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static">
      <Modal.Body className="mt-4 mb-3 text-center">{message}</Modal.Body>
      <Modal.Footer className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary" onClick={onHide}>
          <FormattedMessage id="modal.btn.play-again" />
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export { MessageModal as default }
