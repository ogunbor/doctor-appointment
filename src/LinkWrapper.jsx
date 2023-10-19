import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import {HOSTNAME} from './environment';

export default function LinkWrapper({link}) {    

    const buttonStyle = {
        marginTop: "-190px", // Adjust this value to raise the button
      };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = new URL(link)
    console.log(url)
    if (url.hostname === HOSTNAME ) return <a target="_blank" href={link}>{link}</a>
    else
    return (
      <>
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="primary" onClick={handleShow} style={buttonStyle}>
          Book Appointment
        </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
            {/* <Modal.Title>BitDoc Wallet</Modal.Title> */}
          <Modal.Body><iframe src={link} style={{width:'100%',height:'400px'}}/></Modal.Body>
          <Modal.Footer>
          
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }