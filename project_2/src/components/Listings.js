import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Create from './Create';
import { Container, Row, Button, Card, Col, Badge, Modal, Accordion } from 'react-bootstrap';


export default class Listings extends React.Component {
    url = "https://3000-benjaminong-tgc18projec-2tqzczadh2e.ws-us54.gitpod.io/";

    state = {
        data: [],
        tagData: [],
        active: "create"
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

    render() {
        if (this.state.active === "listings") {
            return (
                <React.Fragment>
                    <div className="container">
                        <Helmet>
                            <style>{'body {background-color: #f5f4d0'}</style>
                        </Helmet>
                        <Row className="g-5">
                            {this.state.data.map(o => <React.Fragment key={o._id}>
                                <Col xs={12} md={6} lg={4}>
                                    {/* <div className="card m-3" >
                                        <div className="card-header">
                                            <img className="card-img-top img-fluid" src={o.outfitImage} />
                                        </div>
                                        <div className="card-body">

                                            <figure className='figure'>

                                                <h5 className="card-title">
                                                    {o.title}
                                                </h5>
                                                <figcaption className="figure-caption">
                                                    Added on: {o.dateAdded}

                                                    {/* {o["fashion-type"].map (e => this.state.tagData[this.state.tagData.indexOf(e)]["fashion-type"])} */}
                                    {/* <p className='text text-sm'>{o.fashionDescription}</p> */}
                                    {/* </figcaption>
                                            </figure>

                                        </div>
                                    </div> */}
                                    <Card>
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



                            </React.Fragment>)}
                        </Row>


                    </div>

                </React.Fragment>
            )
        } else if (this.state.active === "create") {
            return (
                <Create setActive={this.setActive} />
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