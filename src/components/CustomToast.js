import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function CustomToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Row>
      <Col xs={6}>
        <ToastContainer
          className="p-3"
          
          style={{position: 'fixed', top:'2.5em', right:'0', '--bs-toast-max-width':'300px'}}
        >
          <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide animation bg='dark'>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">ALERT</strong>
            </Toast.Header>
            <Toast.Body><strong>Don't forget to get in touch!</strong>
              <p>
                <span className='highlight'>hasanmarhoon98@gmail.com</span>
              </p><p>
                <span className='highlight'>+973 39552155</span>
              </p>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}


{/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide> */ }
