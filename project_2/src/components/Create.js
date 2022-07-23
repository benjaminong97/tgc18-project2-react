import React from 'react';
import axios from 'axios';
import { Container, Accordion, FormGroup, Form, Stack } from 'react-bootstrap';


export default class Create extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/"

    state = {
        newTitle: "",
        newTop: {},
        newBottom: {},
        newShoes: {},
        newOutfitImage: "",
        newContributor: "",
        newCaption: "",
        newHeadDress: "",
        newHairStyle: "",
        newHeadCost : ""
        

    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    create = async () => {
        let response = await axios.post(this.url + "outfits/create", {
            "title": this.state.newTitle,
            "top": this.state.newTop,
            "bottom": this.state.newBottom,
            "shoes": this.state.newShoes,
            "outfitImage": this.state.newOutfitImage,
            "contributor": this.state.newContributor,
            "fashionDescription" : this.state.newCaption,
            "head": {
                "newHeadDress" : this.state.newHeadDress,
                "newHairStyle" : this.state.newHairStyle
            },
            "headCost" : this.state.newHeadCost
        });
        this.props.setActive("listings");
    };

    render() {
        return (
            <React.Fragment>
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

                                <button className="btn btn-primary mt-3" onClick={this.create}>
                                    Create
                                </button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hat/ Hairstyle</Accordion.Header>
                            <Accordion.Body>
                            <Stack gap={3}>
                                    <FormGroup>
                                        <Form.Label htmlFor="titleHat">Head Dress</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="titleHat"
                                            aria-describedby="titleBlock"
                                            name="newHeadDress"
                                            value={this.state.newHeadDress}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="titleHairstyle">Hairstyle</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="titleHairstyle"
                                            aria-describedby="titleBlock"
                                            name="newHairStyle"
                                            value={this.state.newHairStyle}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="headCost">Cost of Hair Products or </Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="headCost"
                                         
                                            name="newHeadCost"
                                            value={this.state.newHeadCost}
                                            onChange={this.updateFormField}
                                        />
                                        
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="headInstructions">Special Remarks</Form.Label>
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
                                        <Form.Label htmlFor="titleTop">Shirt or Top</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="titleTop"
                                            aria-describedby="titleBlock"
                                            name="newTopName"
                                            value={this.state.newHeadDress}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="titleHairstyle">Hairstyle</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="titleHairstyle"
                                            aria-describedby="titleBlock"
                                            name="newHairStyle"
                                            value={this.state.newHairStyle}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="headCost">Cost of Hair Products or </Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="headCost"
                                         
                                            name="newHeadCost"
                                            value={this.state.newHeadCost}
                                            onChange={this.updateFormField}
                                        />
                                        
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="headInstructions">Special Remarks</Form.Label>
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
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Bottom</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Shoes</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Accessories</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>



            </React.Fragment>
        )
    }
}