import React from 'react';
import axios from 'axios';
import { Row, Container, Col, Button, Form } from 'react-bootstrap'

export default class Outfit extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/";

    state = {
        id: this.props.id,
        data: {},
        activeTab: "overview",
        newComment : "",
        reset: ""
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

    delay = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    sendComment = async () => {
        
        let response = await axios.put(this.url + "outfit/comment", {
            "id" : this.state.id ,
            "newComment" : this.state.newComment
        })
        
        this.setState({
            newComment : ""
        })
        let response2 = await axios.get(this.url + "outfit?id=" + this.state.id)
        this.setState({
            data: response2.data
        })
    }

    

    render() {
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
                                <Container>
                                    <h4>Name of Top: {this.state.data.top ? this.state.data.top.topName : ""}</h4>
                                    <h4>Cost of Top: ${this.state.data.top ? this.state.data.top.topCost : ""}</h4>
                                    <h5>Remarks or Special Instructions: {this.state.data.top.topInstructions ? this.state.data.top.topInstructions : "No Remarks"}</h5>
                                </Container>
                            )}
                            {this.state.activeTab === "overview" && (
                                <Container>
                                    <h4>{this.state.data ? this.state.data.fashionDescription : ""}</h4>
                                    <h4>Contributor: {this.state.data ? this.state.data.contributor : ""}</h4>
                                    <h5>Date Added: {this.state.data ? this.state.data.dateAdded : ""}</h5>
                                </Container>
                            )}
                            {this.state.activeTab === "head" && (
                                <Container>
                                    <h4>Name of Head Dress or Hairstyle: {this.state.data.head.headDressHairstyle ? this.state.data.head.headDressHairstyle : "Not Specified"}</h4>
                                    <h4>Cost of Head Dress or Hair Products: ${this.state.data.head.headCost ? this.state.data.head.headCost : "0"}</h4>
                                    <h5>Remarks or Special Instructions: {this.state.data.top.topInstructions ? this.state.data.head.headInstructions : "No Remarks"}</h5>
                                </Container>
                            )}
                            {this.state.activeTab === "bottom" && (
                                <Container>
                                    <h4>Name of Bottom: {this.state.data.bottom ? this.state.data.bottom.bottomName : ""}</h4>
                                    <h4>Cost of Bottom: ${this.state.data.bottom ? this.state.data.bottom.bottomCost : ""}</h4>
                                    <h5>Remarks or Special Instructions: {this.state.data.bottom.bottomInstructions ? this.state.data.bottom.bottomInstructions : "No Remarks"}</h5>
                                </Container>
                            )}
                            {this.state.activeTab === "shoes" && (
                                <Container>
                                    <h4>Model of Shoes: {this.state.data.shoes ? this.state.data.shoes.shoesName : ""}</h4>
                                    <h4>Cost of Shoes: ${this.state.data.shoes ? this.state.data.shoes.shoesCost : ""}</h4>
                                    <h5>Remarks or Special Instructions: {this.state.data.shoes.shoesInstructions ? this.state.data.shoes.shoesInstructions : "No Remarks"}</h5>
                                </Container>
                            )}
                            {this.state.activeTab === "accessories" && (
                                <Container>
                                    <h4>Name of Accessory: {this.state.data.accessories.accessoriesName ? this.state.data.accessories.accessoriesName : "No Accessory"}</h4>
                                    <h4>Cost of Accessory: ${this.state.data.accessories.accessoriesCost ? this.state.data.accessories.accessoriesCost : "0"}</h4>
                                    <h5>Remarks or Special Instructions: {this.state.data.accessories.accessoriesInstructions ? this.state.data.accessories.accessoriesInstructions : "No Remarks"}</h5>
                                </Container>
                            )}
                        </Col>
                    </Row>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        id="caption"
                        placeholder="Type your comment here.."
                        name="newComment"
                        value={this.state.newComment}
                        onChange={this.updateFormField}
                        className="m-2"
                    />
                    <Button variant="secondary"
                        className="m-2"
                        onClick= {this.sendComment}
                    >Comment</Button>
                </Container>
                <Container className="m-2">
                    {this.state.data.comments ? 

                    
                    this.state.data.comments.map(c => <React.Fragment key={c.time}>
                        <Container className="m-3">
                        <figcaption>{c.time}</figcaption>
                        <h6>{c.comment}</h6>
                        </Container>
                        
                        
                    </React.Fragment>) : null}
                </Container>
            </React.Fragment>
        )
    }



    async componentDidMount() {
        let response = await axios.get(this.url + "outfit?id=" + this.state.id)
        this.setState({
            data: response.data
        })
    }
}