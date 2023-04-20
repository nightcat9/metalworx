import Container from 'react-bootstrap/Container';
import { Row, Col, CardGroup, Card } from 'react-bootstrap';

//images
import ProductsHeader from '../images/products-header.jpg';
import Industrial from '../images/industrial.jpg';
import Auto from '../images/auto.jpg';
import SpaceShuttle from '../images/space-shuttle.jpg';
import Plane from '../images/plane.jpg';
import Hydraulic from '../images/hydraulic.jpg';
import Pipe from '../images/pipe.jpg';
import Ship from '../images/ship.jpg';
import Agriculture from '../images/agriculture.jpg';

import '../styles/Main.css';

function ProductsPage() {
    return (
        <div className='productsPage'>
            <div className='productsHeader'>
                <img src={ProductsHeader} alt="Gear pieces" className='gears' />
                <div className='centered-text'>
                    <h1>Products</h1>
                </div>
            </div>
            <Container fluid="md">
                <div className='bodyContent'>
                    <Row>
                        <Col md={12} lg={6}>
                            <h2>Our Products Are of the Highest Quality.</h2>
                        </Col>
                        <Col md={12} lg={6}>
                            <p>
                                We develop over 100,000 parts per month and have the capability
                                to create custom pieces to meet any customer's needs.
                                Our facility is ISO certified, ensuring the highest level of safety and quality for our customers.
                            </p>
                            <p>
                                Contact us now to speak to one of our engineers about a product to meet your business needs.
                            </p>

                        </Col>
                    </Row>
                    <div className='bottom-section'>
                        <Row>
                            <h4>
                                MetalWorx Manufacturing Company develops products to serve the following industries:
                            </h4>
                        </Row>
                        <CardGroup>
                            <Row>
                                <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={Industrial} alt="mining excavator" />
                                        <Card.Body>
                                            <Card.Title><h5>Industrial</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={Auto} alt="motorcycle" />
                                        <Card.Body>
                                            <Card.Title><h5>Auto</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={SpaceShuttle} />
                                        <Card.Body>
                                            <Card.Title><h5>Aerospace</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={Plane} />
                                        <Card.Body>
                                            <Card.Title><h5>Commercial Airline</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                            <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={Hydraulic} />
                                        <Card.Body>
                                            <Card.Title><h5>Hydraulic</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={Pipe} />
                                        <Card.Body>
                                            <Card.Title><h5>Plumbing</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={Ship} />
                                        <Card.Body>
                                            <Card.Title><h5>Commercial Shipping</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='products-group'>
                                        <Card.Img variant="top" src={Agriculture} />
                                        <Card.Body>
                                            <Card.Title><h5>Agriculture</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </CardGroup>
                    </div>
                </div>
            </Container >
        </div >

    );
}

export default ProductsPage;