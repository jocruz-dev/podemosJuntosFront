import React from 'react'
import arrow from '../../static/images/return.png';
import { useHistory } from "react-router-dom";
import {Form, Container, Row, Button, Col, Image} from 'react-bootstrap'

const GroupContainer = ()=>{
    let history = useHistory();
    const returnHome = (e)=>{
        e.preventDefault()
        history.push("/home")
    }

    const addPeople = (e)=>{
        e.preventDefault()
        history.push("/member")
    }
    return(
        <div className="home_container">
            <Container fluid className="d-flex flex-column justify-content-center">
                <Container fluid className="d-flex justify-content-end">
                    <Row className="justify-content-end p-4">
                        <Col xs={2} md={2} className="justify-content-start">
                            <Image alt="menu" className="img-fluid" src={arrow} onClick={returnHome}/>
                        </Col>
                    </Row>
                </Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text"/>
                    <Form.Label>Nombre</Form.Label>
                </Form.Group>
            </Container>
            <Container fluid className="container d-flex flex-column justify-content-start align-items-center">
            
            </Container>
            <Container className="d-flex align-items-end justify-content-end">
            <Row className="align-items-center">
                <Col>
                <Button className="button_send" size="sm" variant="outline_light" onClick={addPeople}>Nuevo integrante</Button>
                </Col>
            </Row>
            </Container>
        </div>
    )
}


export default GroupContainer