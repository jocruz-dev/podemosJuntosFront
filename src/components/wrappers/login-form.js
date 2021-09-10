import React from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";


const LoginForm = ()=>{
    let history = useHistory();
    function handleSubmit(e) {
        e.preventDefault()
        console.log('Hola');
        history.push("/home")
    }
    return(
        <Container fluid className="mt-5 align-items-center justify-content-center">
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Row className="align-items-center justify-content-center">
            <Col className="justify-content-center" xs={9} md={3}>
                <Form.Group>
                    <Form.Label className="titulo m-3 pb-4 font-weight-bold">INICIAR SESIÓN</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Control/>
                    <Form.Label className="usuario m-3">Usuario</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"/>
                    <Form.Label className="usuario m-3">Contraseña</Form.Label>
                </Form.Group>
                <Button className="button_send m-4" variant="outline_light" type="submit">
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