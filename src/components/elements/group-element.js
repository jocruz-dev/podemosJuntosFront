import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'

const GroupElement = ({name, status})=>{
    return(
        <Container fluid>
            <Row fluid className="d-flex flex-row p-2">
                <Col xs={6}>{name}</Col>
                <Col>
                    <Button className="button_send" size="sm" variant="outline_light">Nuevo grupo</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default GroupElement;