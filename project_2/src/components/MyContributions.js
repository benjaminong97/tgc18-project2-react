import React from 'react';
import axios from 'axios';
import { Form, Container, Button, Row, Card, Col, Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import TopBar from './TopBar';
import MyOutfit from './MyOutfit';

export default class Search extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/"

    state = {
        query: "",
        queryCategory: "contributor",
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
        //encode to deal with & in query string
        let response = await axios.get(this.url + "myoutfit/search?query=" + encodeURIComponent(this.state.query)
        
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
            'id' : id
        })
        
        this.setActive(page)
    }


    render() {
        if (this.state.active === "search"){
            return (
                <React.Fragment>
                    <Container>
                        <Form.Group>
                            
                            <Form.Control
                                type="text"
                                name="query"
                                value={this.state.query}
                                onChange={this.updateFormField}
                                placeholder="Contributor (Case Sensitive)"
                            />
                            <Button 
                            onClick={this.queryData}
                            className="mt-2" 
                            variant="outline-secondary">
                                Find My Outfits
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
    
                                
    
    
    
                            </React.Fragment>)}
                        </Row>
    
    
                    </div>
    
                </React.Fragment>
            )
        } else if (this.state.active === "outfit") {
            return (
                <React.Fragment>
                    

                    <MyOutfit 
                    id = {this.state.id}
                    setActive = {this.setActive}
                    />

                </React.Fragment>
            )
        }
        
    }



}