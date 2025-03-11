// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import{Button} from 'react-bootstrap'

import { Col,Button} from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function App() {


  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
      <Container>
        <Row>
        <Col lg={6} md={6} sm={12} className="bg-success text-white p-3">
        <h1>first column</h1>
        </Col>
        <Col lg={6} md={6} sm={12} className="bg-danger text-white p-4">
        <h1>second column</h1>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
