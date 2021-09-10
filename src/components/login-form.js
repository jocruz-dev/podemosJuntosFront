import React from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import './styles/login-form.css'

const LoginForm = ()=>{
    function handleSubmit(e) {
        e.preventDefault()
        console.log('Hola');
    }
    return(
        <Container fluid className="mt-5 align-items-center justify-content-center">
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Row className="align-items-center justify-content-center">
            <Col className="justify-content-center" xs={9}>
                <Form.Group>
                    <Form.Label className="usuario m-3">INICIAR SESIÓN</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Control/>
                    <Form.Label className="usuario m-3">Usuario</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"/>
                    <Form.Label className="usuario m-3">Contraseña</Form.Label>
                </Form.Group>
                <Button className="button_send m-5" variant="outline_light" type="submit">
                Enviar
                </Button>
            </Col>
          </Row>
          </Form.Group>
      </Form>
      </Container>
    )
}

export default LoginForm