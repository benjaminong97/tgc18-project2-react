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
        newHeadCost : "",
        newTopName: "",
        newTopCost: "",
        newTopInstructions: "",
        newBottomName: "",
        newBottomCost: "",
        newBottomInstructions: "",
        newShoesName: "",
        newShoesCost:"",
        newShoesInstructions: "",
        newAccessoriesName: "",
        newAccessoriesCost: "",
        newAccessoriesInstructions: ""
        

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
                                            id="bottomRemarks"
                                            placeholder='eg. Oversized, Tucked-In'
                                            name="newBottomInstructions"
                                            value={this.state.newBottomInstructions}
                                            onChange={this.updateFormField}
                                        />

                                    </FormGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Accessories</Accordion.Header>
                            <Accordion.Body>
                            <FormGroup>
                                        <Form.Label htmlFor="titleAccessory">Bottom, eg. Pants, Skirt </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="titleAccessory"
                                            aria-describedby="titleBlock"
                                            name="newBottomName"
                                            value={this.state.newAccessoryName}
                                            onChange={this.updateFormField}
                                        />
                                        <Form.Text id="titleBlock" muted>
                                            Please do not use any offensive or inappriopriate words.
                                        </Form.Text>
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
                    <button className="btn btn-primary mt-3" onClick={this.create}>
                                    Create
                                </button>
                </Container>



            </React.Fragment>
        )
    }
}