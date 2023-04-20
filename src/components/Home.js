import Container from 'react-bootstrap/Container';
import HomeHeader from '../images/home-hero.jpg';
import MachiningLink from '../images/machining-link.jpg';
import ProductLink from '../images/product-link.jpg';
import CastingLink from '../images/casting-link.jpg';
import { Row, Col, Card, Nav } from 'react-bootstrap';

import { Link } from "react-router-dom";

import '../styles/Main.css';

function HomePage() {
    return (
        <div className='homepage'>
            <div className='homeHeader'>
                <img src={HomeHeader} alt="Metal Works building" className='metalworx-building' />
                <div className='centered-text'>
                    <h1>Welcome to MetalWorx Manufacturing</h1>
                </div>
            </div>
            <div className='background'>
                <Container fluid="md">
                <div className='bodyContent'>
                    <Row>
                        <Col md={12} lg={6}>
                            <h2>
                                Metalworx Manufacturing Company Is Your Metal Machining Partner.
                            </h2>
                        </Col>
                        <Col md={12} lg={6}>
                            <p>
                                We are an industry leader in machined and ready-to-use aluminum castings.
                            </p>
                            <p>
                                For over 30 years, we have specialized in high quality,
                                customer-oriented service and durable products.
                                Contact us for more information about our products and services,
                                or speak to one of our engineers.
                            </p>
                            <p>We have a list of products and castings for you to review.
                                We can also custom-build any component to meet your specific needs.
                            </p>
                            <p>Thank you for visiting.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <div className='img'>
                                <Nav.Link as={Link} to={"/machining"}>
                                    <Card className="bg-dark text-white">
                                        <Card.Img src={MachiningLink} alt="Drilling into metal" />
                                        <Card.ImgOverlay>
                                            <div className='cardTitle'>
                                                <Card.Title><h3>Machining</h3></Card.Title>
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Nav.Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className='img'>
                                <Nav.Link as={Link} to={"/products"}>
                                    <Card className="bg-dark text-white">
                                        <Card.Img src={ProductLink} alt="Dryer duct" />
                                        <Card.ImgOverlay>
                                            <div className='cardTitle'>
                                                <Card.Title><h3>Products</h3></Card.Title>
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Nav.Link>
                            </div>

                        </Col>
                        <Col xs={12} sm={4}>
                            <div className='img'>
                                <Nav.Link as={Link} to={"/castings"}>
                                    <Card className="bg-dark text-white">
                                        <Card.Img src={CastingLink} alt="Pouring liquid metal into mold" />
                                        <Card.ImgOverlay>
                                            <div className='cardTitle'>
                                                <Card.Title><h3>Castings</h3></Card.Title>
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            </div>
            
        </div>
    );
}

export default HomePage;