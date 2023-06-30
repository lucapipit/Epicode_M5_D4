import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json"

function NavigationBar({setCategory, searchEngine}){


  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100" style={{zIndex: "9"}}>
      <Container fluid>
        <Navbar.Brand href="#">BestBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Books</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={()=>setCategory(fantasy)}>Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={()=>setCategory(horror)}>Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action5" onClick={()=>setCategory(romance)}>Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action6" onClick={()=>setCategory(scifi)}>SciFi</NavDropdown.Item>
              <NavDropdown.Item href="#action7" onClick={()=>setCategory(history)}>History</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={searchEngine}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar