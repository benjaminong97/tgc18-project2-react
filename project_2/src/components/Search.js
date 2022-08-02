import React from 'react';
import axios from 'axios';
import { Form, Container, Button, Row, Card, Col, Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import TopBar from './TopBar';
import Outfit from './Outfit';

export default class Search extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/"

    state = {
        query: "",
        queryCategory: "title",
        data: [],
        id: "",
        active: "search"
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //function that sends the query to the server, retrieves the information
    // stores the retrieved information in state.data
    queryData = async () => {
        
        let response = await axios.get(this.url + "outfit/search?" + "category=" +
        this.state.queryCategory + "&query=" + this.state.query
        + "&querycatname=" + this.state.queryCategory+"Name"
        );
        this.setState ({
            data : response.data
        })
    }

    selectCategoryChange = (event) => {
        this.setState({
            queryCategory: event.target.value
        })
    }
    setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    setOutfit = (page, id) => {

        this.setState({
            'currentId' : id
        })
        this.setActive(page)
    }


    render() {
        if (this.state.active === "search"){
            return (
                <React.Fragment>
                    <Container>
                        <Form.Group>
                            <Form.Select aria-label="Default select example"
                            onChange={this.selectCategoryChange}
                            >
                                <option value="title">Outfit Title</option>
                                <option value="top">Top</option>
                                <option value="bottom">Bottom</option>
                                <option value="shoes">Shoes</option>
                                <option value="accessories">Accessories</option>
                                <option value="contributor">Contributor</option>
                            </Form.Select>
                            <Form.Control
                                type="text"
                                name="query"
                                value={this.state.query}
                                onChange={this.updateFormField}
                            />
                            <Button 
                            onClick={this.queryData}
                            className="mt-2" 
                            variant="outline-secondary">
                                Search
                            </Button>
                        </Form.Group>
    
                    </Container>
    
                    <div className="container">
                        <Helmet>
                            <style>{'body {background-color: #FFFFFD'}</style>
                        </Helmet>
                        <Row className="g-5">
                            {this.state.data.map(o => <React.Fragment key={o._id}>
                                <Col xs={12} md={6} lg={4}>
    
                                    <Card className="Card MainList m-3" onClick={() => this.setOutfit("outfit", o._id)}>
                                        <Card.Img variant="top" src={o.outfitImage} style={{ height: "350px", objectFit: "cover" }} />
                                        <Card.Body>
                                            <Card.Title>{o.title}</Card.Title>
                                            <Card.Text>
                                                {o.fashionDescription}
                                            </Card.Text>
                                            <Card.Text>
                                                Price of outfit: ${(Number(o.top.topCost) + Number(o.bottom.bottomCost) + Number(o.shoes.shoesCost)).toFixed(2)}
                                            </Card.Text>
                                            <div className = "tagsPos">
                                                {
                                                    o.tags.map(t => (<Badge bg="secondary" className="m-1">{t}</Badge>))
                                                }
                                                <figcaption className="figure-caption mb-2">
                                                    Added on: {o.dateAdded}
                                                </figcaption>
                                            </div>
    
    
                                        </Card.Body>
                                        <Card.Body>
    
                                        </Card.Body>
                                    </Card>
    
                                </Col>
    
                                {/* <Button variant="danger" onClick={() => this.deleteEntry(o._id)}>Delete</Button> */}
    
    
    
                            </React.Fragment>)}
                        </Row>
    
    
                    </div>
    
                </React.Fragment>
            )
        } else if (this.state.active === "outfit") {
            return (
                <React.Fragment>
                    

                    <Outfit 
                    id = {this.state.currentId}
                    />

                </React.Fragment>
            )
        }
        
    }


    async componentDidMount() {
        let response = await axios.get(this.url + "outfits")
        this.setState({
            data: response.data
        })
    }

}