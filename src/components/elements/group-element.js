import React from 'react'
import {Container, Row, Col, Image } from 'react-bootstrap'
import edit from '../../static/images/edit.png'

const GroupElement = ({name, status})=>{
    return(
        <Container fluid>
            <Row fluid className="p-2">
                <Col xs="8">{name}</Col>
                <Col xs="2" className="justify-content-end">
                <Image alt="edit" className="img-fluid" src={edit}/>
                </Col>
            </Row>
        </Container>
    )
}

export default GroupElement;