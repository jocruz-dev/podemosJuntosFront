import React, {useState}  from 'react'
import GroupElement from '../elements/group-element'
import {Offcanvas, Button, Row, Container, Col, Image} from 'react-bootstrap'
import dataMock from "../../static/data.js"
import menu from '../../static/images/menu.png'
import { useHistory } from "react-router-dom";



const Home = ()=>{

    const [data, setData] = useState(dataMock)
    const [show, setShow] = useState(false);
    let history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (e)=> {
    e.preventDefault()
    history.push("/groups")
      setData(...data)

    }

    return(
        <div className="home_container">
            <Container fluid className="d-flex justify-content-start">
                <Row className="justify-content-start">
                    <Col xs={2} md={2} className="justify-content-start">
                        <Image alt="menu" className="img-fluid" src={menu} onClick={handleShow}/>
                    </Col>
                </Row>
            </Container>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <a href="/">Cerrar sesión</a>
                </Offcanvas.Body>
            </Offcanvas>
            <h1>Bienvenido Juan</h1>
            <Container fluid className="container d-flex flex-column justify-content-start align-items-center">
            {data.map((el, index, arr)=>{
                return <GroupElement name={el.nombre} status={el.status}></GroupElement>
            })}
            </Container>
            <Container className="d-flex justify-content-end">
            <Row className="align-items-center">
                <Col>
                <Button className="button_send" size="sm" variant="outline_light" onClick={handleClick}>Nuevo grupo</Button>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default Home;