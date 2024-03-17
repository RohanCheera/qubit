import React, { useState } from 'react';
import './navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'; // Import Axios

function Navigation() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/api/form/submit', formData);
      console.log(response.data);
      alert('Message sent successfully');
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <>
      <Navbar key='lg' expand='lg' className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Rohan Cheera</Navbar.Brand>
          <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} />
          <Navbar.Offcanvas
            id={'offcanvasNavbar-expand-lg'}
            aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="work">Projects</Nav.Link>
                <Button variant="primary" onClick={handleShow}>
                  Contact me!!
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Grab a coffee, dive into my portfolio </Modal.Title>
                  </Modal.Header>
                  <Modal.Title style={{ textAlign: "center" }}>Let's connect! </Modal.Title>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
