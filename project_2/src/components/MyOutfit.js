import React from 'react';
import axios from 'axios';
import { Row, Container, Col, Button, Form, Table, Card, FormGroup, Accordion, Stack } from 'react-bootstrap'

export default class Outfit extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/";

    state = {
        id: this.props.id,
        data: {},
        activeTab: "overview",
        newComment: "",
        reset: "",
        active: "outfit",
        newTitle: "",
        newOutfitImage: "",
        newContributor: "",
        newCaption: "",
        newHeadDressHairstyle: "",
        newHeadType: "",
        newHeadCost: "",
        newHeadInstructions: undefined,
        newTopName: "",
        newTopCost: "",
        newTopInstructions: undefined,
        newBottomName: "",
        newBottomCost: "",
        newBottomInstructions: undefined,
        newShoesName: undefined,
        newShoesCost: undefined,
        newShoesInstructions: undefined,
        newAccessoriesPresent: "false",
        newAccessoriesName: undefined,
        newAccessoriesCost: undefined,
        newAccessoriesInstructions: undefined
    }

    setActiveTab = (name) => {
        this.setState({
            activeTab: name
        })
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteEntry = async (id) => {
        console.log(`${this.url}outfits/delete/${id}`)
        await axios.delete(`${this.url}outfits/delete/${id}`)
        this.props.setActive('search')
    }

    
    



    render() {
        if (this.state.active === "outfit") {
            return (
                <React.Fragment>
    
    
                    <Container>
                        <h1 style={{ "text-align": "center" }}>{this.state.data.title}</h1>
                        <Row xs={1} s={1} lg={2} className="m-3">
    
                            <Col>
                                <Container>
                                    <img src={this.state.data.outfitImage} alt="image of outfit" width="300rem" height="500rem" />
                                </Container>
    
                            </Col>
                            <Col>
    
                                <Container>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("overview")}>
                                        Overview
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("head")}>
                                        Head Dress or Hairstyle
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("top")}>
                                        Top
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("bottom")}>
                                        Bottom
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("shoes")}>
                                        Shoes
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("accessories")}>
                                        Accessories
                                    </Button>
                                </Container>
    
    
                                {this.state.activeTab === "top" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>Name of Top:</td>
                                                    <td>{this.state.data.top ? this.state.data.top.topName : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>Cost of Top:</td>
                                                    <td>${this.state.data.top ? this.state.data.top.topCost : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>Remarks or Special Instructions:</td>
                                                    <td>{this.state.data.top.topInstructions ? this.state.data.top.topInstructions : "No Remarks"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "overview" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
    
                                                    <td>
                                                        Caption:
                                                    </td>
                                                    <td>
                                                        {this.state.data ? this.state.data.fashionDescription : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Contributor:</td>
                                                    <td>{this.state.data ? this.state.data.contributor : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Date Added:
                                                    </td>
                                                    <td>
                                                        {this.state.data ? this.state.data.dateAdded : ""}
                                                    </td>
    
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Container>
                                )}
                                {this.state.activeTab === "head" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Head Dress or Hairstyle:
                                                    </td>
                                                    <td>
                                                        {this.state.data.head.headDressHairstyle ? this.state.data.head.headDressHairstyle : "Not Specified"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Head Dress or Hair Products:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.head.headCost ? this.state.data.head.headCost : "0"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.top.topInstructions ? this.state.data.head.headInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "bottom" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Bottom:
                                                    </td>
                                                    <td>
                                                        {this.state.data.bottom ? this.state.data.bottom.bottomName : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Bottom:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.bottom ? this.state.data.bottom.bottomCost : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.bottom.bottomInstructions ? this.state.data.bottom.bottomInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "shoes" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Model of Shoes:
                                                    </td>
                                                    <td>
                                                        {this.state.data.shoes ? this.state.data.shoes.shoesName : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Shoes:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.shoes ? this.state.data.shoes.shoesCost : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.shoes.shoesInstructions ? this.state.data.shoes.shoesInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
    
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "accessories" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Accessory:
                                                    </td>
                                                    <td>
                                                        {this.state.data.accessories.accessoriesName ? this.state.data.accessories.accessoriesName : "No Accessory"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Accessory:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.accessories.accessoriesCost ? this.state.data.accessories.accessoriesCost : "0"}
                                                    </td>
    
    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.accessories.accessoriesInstructions ? this.state.data.accessories.accessoriesInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                <Container>
                                <Button variant="warning" className="m-3" onClick={() => this.setState({active: "update"})}>
                                    Update Outfit
                                </Button>
                                <Button variant="danger" className="m-3" onClick={() => this.setState({active:"delete"})}>
                                    Delete Outfit
                                </Button>
                                </Container>
                                
                            </Col>
                        </Row>
    
                    </Container>
    
                </React.Fragment>
            )
        } else if (this.state.active === "delete") {
            return (
                <React.Fragment>
    
    
                    <Container>
                        <h1 style={{ "text-align": "center" }}>{this.state.data.title}</h1>
                        <Row xs={1} s={1} lg={2} className="m-3">
    
                            <Col>
                                <Container>
                                    <img src={this.state.data.outfitImage} alt="image of outfit" width="300rem" height="500rem" />
                                </Container>
    
                            </Col>
                            <Col>
    
                                <Container>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("overview")}>
                                        Overview
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("head")}>
                                        Head Dress or Hairstyle
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("top")}>
                                        Top
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("bottom")}>
                                        Bottom
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("shoes")}>
                                        Shoes
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("accessories")}>
                                        Accessories
                                    </Button>
                                </Container>
    
    
                                {this.state.activeTab === "top" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>Name of Top:</td>
                                                    <td>{this.state.data.top ? this.state.data.top.topName : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>Cost of Top:</td>
                                                    <td>${this.state.data.top ? this.state.data.top.topCost : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>Remarks or Special Instructions:</td>
                                                    <td>{this.state.data.top.topInstructions ? this.state.data.top.topInstructions : "No Remarks"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "overview" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
    
                                                    <td>
                                                        Caption:
                                                    </td>
                                                    <td>
                                                        {this.state.data ? this.state.data.fashionDescription : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Contributor:</td>
                                                    <td>{this.state.data ? this.state.data.contributor : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Date Added:
                                                    </td>
                                                    <td>
                                                        {this.state.data ? this.state.data.dateAdded : ""}
                                                    </td>
    
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Container>
                                )}
                                {this.state.activeTab === "head" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Head Dress or Hairstyle:
                                                    </td>
                                                    <td>
                                                        {this.state.data.head.headDressHairstyle ? this.state.data.head.headDressHairstyle : "Not Specified"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Head Dress or Hair Products:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.head.headCost ? this.state.data.head.headCost : "0"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.top.topInstructions ? this.state.data.head.headInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "bottom" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Bottom:
                                                    </td>
                                                    <td>
                                                        {this.state.data.bottom ? this.state.data.bottom.bottomName : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Bottom:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.bottom ? this.state.data.bottom.bottomCost : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.bottom.bottomInstructions ? this.state.data.bottom.bottomInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "shoes" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Model of Shoes:
                                                    </td>
                                                    <td>
                                                        {this.state.data.shoes ? this.state.data.shoes.shoesName : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Shoes:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.shoes ? this.state.data.shoes.shoesCost : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.shoes.shoesInstructions ? this.state.data.shoes.shoesInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
    
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "accessories" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Accessory:
                                                    </td>
                                                    <td>
                                                        {this.state.data.accessories.accessoriesName ? this.state.data.accessories.accessoriesName : "No Accessory"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Accessory:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.accessories.accessoriesCost ? this.state.data.accessories.accessoriesCost : "0"}
                                                    </td>
    
    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.accessories.accessoriesInstructions ? this.state.data.accessories.accessoriesInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                <Container>
                                <Button variant="warning" className="m-3" onClick={() => this.setState({active: "update"})}>
                                    Update Outfit
                                </Button>
                                <Button variant="danger" className="m-3" onClick={() => this.setState({active:"delete"})}>
                                    Delete Outfit
                                </Button>
                                </Container>

                                <Container>
                                    <Card bg={"danger"} text={'light'}>
                                        <Container>Are you sure you want to delete this outfit?</Container>
                                        </Card>
                                        
                                        <Button variant="danger" className="m-3" onClick={() => this.deleteEntry(this.state.id)}>Delete</Button> 
                                        <Button variant="success" className='m-3' onClick={() => this.setState({active:"outfit"})}>No, go back</Button>
                                </Container>
                                
                            </Col>
                        </Row>
    
                    </Container>
    
                </React.Fragment>
            )
            
        } else if (this.state.active ==="update") {
            return(
                <React.Fragment>
    
    
                    <Container>
                        <h1 style={{ "text-align": "center" }}>{this.state.data.title}</h1>
                        <Row xs={1} s={1} lg={2} className="m-3">
    
                            <Col>
                                <Container>
                                    <img src={this.state.data.outfitImage} alt="image of outfit" width="300rem" height="500rem" />
                                </Container>
    
                            </Col>
                            <Col>
    
                                <Container>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("overview")}>
                                        Overview
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("head")}>
                                        Head Dress or Hairstyle
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("top")}>
                                        Top
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("bottom")}>
                                        Bottom
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("shoes")}>
                                        Shoes
                                    </Button>
                                    <Button className="m-2" variant="outline-secondary" onClick={() => this.setActiveTab("accessories")}>
                                        Accessories
                                    </Button>
                                </Container>
    
    
                                {this.state.activeTab === "top" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>Name of Top:</td>
                                                    <td>{this.state.data.top ? this.state.data.top.topName : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>Cost of Top:</td>
                                                    <td>${this.state.data.top ? this.state.data.top.topCost : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>Remarks or Special Instructions:</td>
                                                    <td>{this.state.data.top.topInstructions ? this.state.data.top.topInstructions : "No Remarks"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "overview" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
    
                                                    <td>
                                                        Caption:
                                                    </td>
                                                    <td>
                                                        {this.state.data ? this.state.data.fashionDescription : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Contributor:</td>
                                                    <td>{this.state.data ? this.state.data.contributor : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Date Added:
                                                    </td>
                                                    <td>
                                                        {this.state.data ? this.state.data.dateAdded : ""}
                                                    </td>
    
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Container>
                                )}
                                {this.state.activeTab === "head" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Head Dress or Hairstyle:
                                                    </td>
                                                    <td>
                                                        {this.state.data.head.headDressHairstyle ? this.state.data.head.headDressHairstyle : "Not Specified"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Head Dress or Hair Products:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.head.headCost ? this.state.data.head.headCost : "0"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.top.topInstructions ? this.state.data.head.headInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "bottom" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Bottom:
                                                    </td>
                                                    <td>
                                                        {this.state.data.bottom ? this.state.data.bottom.bottomName : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Bottom:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.bottom ? this.state.data.bottom.bottomCost : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.bottom.bottomInstructions ? this.state.data.bottom.bottomInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "shoes" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Model of Shoes:
                                                    </td>
                                                    <td>
                                                        {this.state.data.shoes ? this.state.data.shoes.shoesName : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Shoes:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.shoes ? this.state.data.shoes.shoesCost : ""}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.shoes.shoesInstructions ? this.state.data.shoes.shoesInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
    
                                        </Table>
    
                                    </Container>
                                )}
                                {this.state.activeTab === "accessories" && (
                                    <Container className="m-3">
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name of Accessory:
                                                    </td>
                                                    <td>
                                                        {this.state.data.accessories.accessoriesName ? this.state.data.accessories.accessoriesName : "No Accessory"}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Cost of Accessory:
                                                    </td>
                                                    <td>
                                                        ${this.state.data.accessories.accessoriesCost ? this.state.data.accessories.accessoriesCost : "0"}
                                                    </td>
    
    
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Remarks or Special Instructions:
                                                    </td>
                                                    <td>
                                                        {this.state.data.accessories.accessoriesInstructions ? this.state.data.accessories.accessoriesInstructions : "No Remarks"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
    
                                    </Container>
                                )}
                                <Container>
                                <Button variant="warning" className="m-3">
                                    Update Outfit
                                </Button>
                                <Button variant="danger" className="m-3" onClick={() => this.setState({active:"delete"})}>
                                    Delete Outfit
                                </Button>
                                </Container>
                                
                            </Col>
                        </Row>
    
                    </Container>

                    <Container>
                    <Container>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Overview</Accordion.Header>
                            <Accordion.Body>
                                <Stack gap={3}>
                                    <FormGroup>
                                        <Form.Label htmlFor="title">Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="title"
                                            aria-describedby="titleBlock"
                                            name="newTitle"
                                            value={this.state.newTitle}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="contributor">Name of Contributor</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="contributor"
                                            aria-describedby="titleBlock"
                                            name="newContributor"
                                            value={this.state.newContributor}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="imageUrl">Image URL</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="imageUrl"
                                            aria-describedby="titleBlock"
                                            name="newOutfitImage"
                                            value={this.state.newOutfitImage}
                                            onChange={this.updateFormField}
                                        />

                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="caption">Caption</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            id="caption"
                                            placeholder='Up to 320 characters'
                                            name="newCaption"
                                            value={this.state.newCaption}
                                            onChange={this.updateFormField}
                                        />

                                    </FormGroup>
                                </Stack>


                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Head Dress or Hairstyle</Accordion.Header>
                            <Accordion.Body>
                                <Stack gap={3}>
                                    <FormGroup>
                                        <Form.Label htmlFor="typeHat">Head Dress or Hairstyle?</Form.Label><br />
                                        <input type="radio" id="headDress" name="head" value="headDress" className="mx-3"
                                            checked={this.state.newHeadType === "headDress"}
                                            onChange={this.radioHeadChange} />
                                        <Form.Label>Head Dress</Form.Label>
                                        <input type="radio" id="hairStyle" name="head" value="hairstyle" className="mx-3"
                                            checked={this.state.newHeadType === "hairstyle"}
                                            onChange={this.radioHeadChange} />
                                        <Form.Label>Hairstyle</Form.Label>
                                        <input type="radio" id="none" name="head" value="none" className="mx-3"
                                            checked={this.state.newHeadType === "none"}
                                            onChange={this.radioHeadChange} />
                                        <Form.Label>None</Form.Label>

                                        <br />
                                        <Form.Label htmlFor="titleHat">Name of Head Dress or Hairstyle</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="titleHat"
                                            aria-describedby="titleBlock"
                                            name="newHeadDressHairstyle"
                                            value={this.state.newHeadDressHairstyle}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
                                    </FormGroup>

                                    <FormGroup>
                                        <Form.Label htmlFor="headCost">Cost of Hair Products or Head Dress</Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="headCost"

                                            name="newHeadCost"
                                            value={this.state.newHeadCost}
                                            onChange={this.updateFormField}
                                        />

                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="headRemarks">Special Remarks</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            id="headInstructions"
                                            placeholder='Please list down any special instructions for styling or any hair products needed'
                                            name="newHeadInstructions"
                                            value={this.state.newHeadInstructions}
                                            onChange={this.updateFormField}
                                        />

                                    </FormGroup>

                                </Stack>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Top</Accordion.Header>
                            <Accordion.Body>
                                <FormGroup>
                                    <Form.Label htmlFor="titleTop">Top, eg T-Shirt, Blouse</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="titleTop"
                                        aria-describedby="titleBlock"
                                        name="newTopName"
                                        value={this.state.newTopName}
                                        onChange={this.updateFormField}
                                    />
                                    <Form.Text id="titleBlock" muted>
                                        Please do not use any offensive or inappriopriate words.
                                    </Form.Text>
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label htmlFor="topCost">Cost of Shirt or Top</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="topCost"

                                        name="newTopCost"
                                        value={this.state.newTopCost}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="topRemarks">Remarks or Instructions</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={3}
                                        id="topInstructions"
                                        placeholder='eg. Oversized, Tucked-In'
                                        name="newTopInstructions"
                                        value={this.state.newTopInstructions}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Bottom</Accordion.Header>
                            <Accordion.Body>
                                <FormGroup>
                                    <Form.Label htmlFor="titleBottom">Bottom, eg. Pants, Skirt </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="titleBottom"
                                        aria-describedby="titleBlock"
                                        name="newBottomName"
                                        value={this.state.newBottomName}
                                        onChange={this.updateFormField}
                                    />
                                    <Form.Text id="titleBlock" muted>
                                        Please do not use any offensive or inappriopriate words.
                                    </Form.Text>
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label htmlFor="bottomCost">Cost of Bottom</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="bottomCost"

                                        name="newBottomCost"
                                        value={this.state.newBottomCost}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="bottomRemarks">Remarks or Instructions</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={3}
                                        id="topRemarks"
                                        placeholder='eg. Oversized, Tucked-In'
                                        name="newBottomInstructions"
                                        value={this.state.newBottomInstructions}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Shoes</Accordion.Header>
                            <Accordion.Body>
                                <FormGroup>
                                    <Form.Label htmlFor="titleShoes">Shoe Model</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="titleShoes"
                                        aria-describedby="titleBlock"
                                        name="newShoesName"
                                        value={this.state.newShoesName}
                                        onChange={this.updateFormField}
                                    />
                                    <Form.Text id="titleBlock" muted>
                                        Please do not use any offensive or inappriopriate words.
                                    </Form.Text>
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label htmlFor="shoesCost">Cost of Shoes</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="shoesCost"

                                        name="newShoesCost"
                                        value={this.state.newShoesCost}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="shoesRemarks">Remarks or Instructions</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={3}
                                        id="shoesRemarks"
                                        placeholder='eg. Laces Swapped Out, Ankle Socks'
                                        name="newShoesInstructions"
                                        value={this.state.newShoesInstructions}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Accessories</Accordion.Header>
                            <Accordion.Body>
                                <FormGroup>
                                    <Form.Label>Does the outfit have an accessory?</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                    onChange={this.selectAccessoriesChange}>
                                        <option value="false">No</option>
                                        <option value="true">Yes</option>
                                        
                                        
                                    </Form.Select>
                                    <br/>
                                    <Form.Label htmlFor="titleAccessory">If yes, Name of accessory</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="titleAccessory"
                                        aria-describedby="titleBlock"
                                        name="newBottomName"
                                        value={this.state.newAccessoryName}
                                        onChange={this.updateFormField}
                                    />
                                    
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label htmlFor="accesoryCost">Cost of Bottom</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="accessoryCost"

                                        name="newAccessoryCost"
                                        value={this.state.newAccessoryCost}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="accessoryRemarks">Remarks or Instructions</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={3}
                                        id="accessoryRemarks"
                                        placeholder='eg. Oversized, Tucked-In'
                                        name="newAccessoryInstructions"
                                        value={this.state.newAccessoryInstructions}
                                        onChange={this.updateFormField}
                                    />

                                </FormGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Button variant="secondary" className="btn btn-primary mt-3" onClick={this.create}>
                        Create
                    </Button>
                </Container>

                    </Container>
    
                </React.Fragment>
            )
        }
        
    }



    async componentDidMount() {
        console.log(this.state.id)
        let response = await axios.get(this.url + "outfit?id=" + this.state.id)
        this.setState({
            data: response.data,
            newTitle: response.data.title,
            newOutfitImage : response.data.outfitImage,
            newCaption: response.data.fashionDescription,
            newHeadDressHairstyle : response.data.head.headDressHairstyle
        })
    }
}