import React from 'react';
import axios from 'axios';
import { Container, Accordion, FormGroup, Form, Stack, Button } from 'react-bootstrap';
import { FormErrors } from './FormErrors';


export default class Create extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/"

    state = {
        newTitle: "",
        newOutfitImage: "",
        newContributor: "",
        newCaption: "",
        newHeadDressHairstyle: "",
        newHeadType: "none",
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
        newAccessoriesInstructions: undefined,
        titleValid : false,
        outfitImageValid: false,
        contributorValid: false,
        captionValid: false,
        formErrors : {
            newTitle : "",
            newOutfitImage : "",
            newCaption: "",
            newContributor: ""
        },
        validated : false,
        newTags : []



    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            
        }, () => {this.validateField(event.target.name, event.target.value)})
    }

    validateForm() {
        this.setState({
            formValid: this.state.newTitle && this.state.newOutfitImage
        })
    }

    checkboxTagsChange = (event) => {
        if (this.state.newTags.includes(event.target.value)) {
            let tagIndex = this.state.newTags.indexOf(event.target.value)
            let clonedArray = this.state.newTags.slice(0)
            clonedArray.splice(tagIndex,1)
            this.setState({
                newTags: clonedArray
            })
        } 
        
        else {
            let clonedArray = this.state.newTags.slice(0)
            clonedArray.push(event.target.value)
            this.setState({
                newTags : clonedArray
            })
        }

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let outfitImageValid = this.state.outfitImageValid;
        let contributorValid = this.state.contributorValid;
        let captionValid = this.state.captionValid;

        

        switch(fieldName) {
            case "newTitle" :
                titleValid = value.length >= 5;
                fieldValidationErrors.newTitle = titleValid ? '' : 'is too short';
                break;
            case "newOutfitImage" :
                outfitImageValid = value.length >= 8;
                fieldValidationErrors.newOutfitImage = outfitImageValid ? '' : 'not a valid link';
                break;
        }
        this.setState({
            formErrors : fieldValidationErrors,
            titleValid : titleValid,
            outfitImageValid : outfitImageValid
        }, this.validateForm)
    }

    radioHeadChange = (event) => {
        this.setState({
            newHeadType: event.target.value
        })
    }

    selectAccessoriesChange = (event) => {
        this.setState({
            newAccessoriesPresent: event.target.value
        })
    }

    create = async () => {
        let response = await axios.post(this.url + "outfits/create", {
            "title": this.state.newTitle,
            
            "outfitImage": this.state.newOutfitImage,
            "contributor": this.state.newContributor,
            "fashionDescription": this.state.newCaption,
            "head": {
                "headDressHairstyle": this.state.newHeadDressHairstyle,
                "headType" : this.state.newHeadType,
                "headCost": this.state.newHeadCost,
                "headInstructions": this.state.newHeadInstructions
            },
            "top": {
                "topName": this.state.newTopName,
                "topCost": this.state.newTopCost,
                "topInstructions": this.state.newTopInstructions
            },
            "bottom": {
                "bottomName": this.state.newBottomName,
                "bottomCost": this.state.newBottomCost,
                "bottomInstructions": this.state.newBottomInstructions
            },
            "shoes": {
                "shoesName": this.state.newShoesName,
                "shoesCost": this.state.newShoesCost,
                "shoesInstructions": this.state.newShoesInstructions
            },
            "accessories": {
                "accessoriesName": this.state.newAccessoriesName,
                "accessoriesCost": this.state.newAccessoriesCost,
                "accessoriesInstructions": this.state.newAccessoriesInstructions,
                "accessoriesPresent": this.state.newAccessoriesPresent
            },
            "tags" : this.state.newTags

        });
        this.setState({
            validated : true

        }, await this.validateForm)

        this.props.setActive("listings");
        let response2 = await axios.get(this.url + "outfits");
        this.setState({
            data : response2.data
        })
    };

    render() {
        return (
            <React.Fragment>
                <Container>
                    <FormErrors formErrors={this.state.formErrors} />
                </Container>
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
                                    <FormGroup>
                                        <Form.Label>Tags</Form.Label>
                                        <div className="mb-3">
                                            <Form.Check inline 
                                            label="Casual"
                                            name="tags"
                                            value="Casual"
                                            checked = {this.state.newTags.includes('Casual')}
                                            onChange = {this.checkboxTagsChange}
                                            type='checkbox'/>
                                            <Form.Check inline 
                                            label="Formal"
                                            value = "Formal"
                                            checked = {this.state.newTags.includes('Formal')}
                                            onChange = {this.checkboxTagsChange}
                                            name="tags"
                                            type='checkbox'/>
                                            <Form.Check inline 
                                            label="Beach"
                                            value="Beach"
                                            checked = {this.state.newTags.includes('Beach')}
                                            onChange = {this.checkboxTagsChange}
                                            name="tags"
                                            type='checkbox'/>
                                            <Form.Check inline 
                                            label="Sports"
                                            value = "Sports"
                                            checked = {this.state.newTags.includes('Sports')}
                                            onChange = {this.checkboxTagsChange}
                                            name="tags"
                                            type='checkbox'/>
                                            <Form.Check inline 
                                            label="Street"
                                            value = "street"
                                            checked = {this.state.newTags.includes('Street')}
                                            onChange = {this.checkboxTagsChange}
                                            name="tags"
                                            type='checkbox'/>
                                            <Form.Check inline 
                                            label="Cold Wear"
                                            value = "Cold Wear"
                                            checked = {this.state.newTags.includes('Cold Wear')}
                                            onChange = {this.checkboxTagsChange}
                                            name="tags"
                                            type='checkbox'/>
                                            <Form.Check inline 
                                            label="Smart Casual"
                                            value = "Smart Casual"
                                            checked = {this.state.newTags.includes('Smart Casual')}
                                            onChange = {this.checkboxTagsChange}
                                            name="tags"
                                            type='checkbox'/>
                                        </div>
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
                                    <Form.Label htmlFor="accesoryCost">Cost of Accessory</Form.Label>
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



            </React.Fragment>
        )
    }
}