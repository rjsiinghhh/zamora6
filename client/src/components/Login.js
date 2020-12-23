import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';
import { v4 as uuidV4 } from 'uuid';


export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)


  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }


  return(
    <Container className="align-items-center d-flex" style= {{ height: '100vh' }}>
    <Form onSubmit= {handleSubmit} className="w-100">
    <Form.Group>
    <Form.Label> Name </Form.Label>
    <Form.Control type="text" ref={idRef} required />
    </Form.Group>
    <Button className="mr-2 btn btn-danger" type="submit"> Login
    </Button>
    <Button onClick={createNewId} variant="secondary"> Create </Button>
    </Form>
    </Container>
  )
}
