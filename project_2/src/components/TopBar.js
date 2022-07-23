import React from 'react';
import moiraiLogo from "../images/moirai.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default class TopBar extends React.Component {

    state = {
        data: [],
        tagData: [],
        active: "listings",
        deleted: ""
    };

    setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand onClick={() => this.setActive("listings")}><img src={moiraiLogo} width="50px" className="d-inline-block align-top"/></Navbar.Brand>
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