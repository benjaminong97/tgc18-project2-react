import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Create from './Create';
import { Container, Row, Button, Card, Col, Badge, Modal, Accordion } from 'react-bootstrap';
import "../style.css"
import TopBar from './TopBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import moiraiLogo from "../images/moirai.png"


export default class Listings extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/";

    state = {
        data: [],
        tagData: [],
        active: "listings",
        deleted: "",
        recipeId: ""
    };

    renderContent() {
        if (this.state.active === "listings") {
            return (
                <React.Fragment>
                    <Listings />
                </React.Fragment>
            );
        } else if (this.state.active === "create") {
            return (
                <React.Fragment>
                    {/* <Create /> */}
                </React.Fragment>
            )
        }
    }


    setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    deleteEntry = async (id) => {
        console.log(`${this.url}outfits/delete/${id}`)
        await axios.delete(`${this.url}outfits/delete/${id}`)
        window.location.reload()
    }

    render() {
        if (this.state.active === "listings") {
            return (
                <React.Fragment>

                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand onClick={() => this.setActive("listings")}><img src={moiraiLogo} width="50px" className="d-inline-block align-top" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link >Home</Nav.Link>
                                    <Nav.Link onClick={() => this.setActive("create")}>Create</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div className="container">
                        <Helmet>
                            <style>{'body {background-color: #f5f4d0'}</style>
                        </Helmet>
                        <Row className="g-5">
                            {this.state.data.map(o => <React.Fragment key={o._id}>
                                <Col xs={12} md={6} lg={4}>

                                    <Card className="Card">
                                        <Card.Img variant="top" src={o.outfitImage} style={{ height: "300px", objectFit: "cover" }} />
                                        <Card.Body>
                                            <Card.Title>{o.title}</Card.Title>
                                            <Card.Text>
                                                {o.fashionDescription}
                                            </Card.Text>
                                            <figcaption className="figure-caption">
                                                Added on: {o.dateAdded}
                                            </figcaption>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    {/* <div class="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive"/>
                                        <div class="profile-content">
                                            <div class="profile-name">John Doe
                                                <p>@johndoedesigner</p>
                                            </div>
                                            <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="profile-overview">
                                                        <p>TWEETS</p>
                                                        <h4>1300</h4></div>
                                                </div>
                                                <div class="col-xs-4">
                                                    <div class="profile-overview">
                                                        <p>FOLLOWERS</p>
                                                        <h4>250</h4></div>
                                                </div>
                                                <div class="col-xs-4">
                                                    <div class="profile-overview">
                                                        <p>FOLLOWING</p>
                                                        <h4>168</h4></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </Col>

                                <Button variant="danger" onClick={() => this.deleteEntry(o._id)}>Delete</Button>



                            </React.Fragment>)}
                        </Row>


                    </div>

                </React.Fragment>
            )
        } else if (this.state.active === "create") {
            return (
                <React.Fragment>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand onClick={() => this.setActive("listings")}><img src={moiraiLogo} width="50px" className="d-inline-block align-top" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link >Home</Nav.Link>
                                    <Nav.Link onClick={() => this.setActive("create")}>Create</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Create setActive={this.setActive} />
                </React.Fragment>
            )
        } else if (this.state.active === "outfit") {
            return (
                <React.Fragment>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand onClick={() => this.setActive("listings")}><img src={moiraiLogo} width="50px" className="d-inline-block align-top" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link >Home</Nav.Link>
                                    <Nav.Link onClick={() => this.setActive("create")}>Create</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </React.Fragment>
            )
        }

    }

    async componentDidMount() {
        let response1 = await axios.get(this.url + "outfits");
        let response2 = await axios.get(this.url + "tags");
        this.setState({
            data: response1.data,
            tagData: response2.data
        })
    }
}