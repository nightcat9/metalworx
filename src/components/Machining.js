import Container from 'react-bootstrap/Container';
import { Row, Col, Card, CardGroup } from 'react-bootstrap';

//images
import MachiningHeader from '../images/machining-header.jpg';
import CompleteBuilds from '../images/builds.jpg';
import Retooling from '../images/retooling.jpg';
import Rework from '../images/bright-spark.jpg';
import Casting from '../images/casting-3.jpg';

import '../styles/Main.css';

function MachiningPage() {
    return (
        <div className='machiningPage'>
            <div className='machiningHeader'>
                <img src={MachiningHeader} alt="Machine drilling into metal" className='sparky-drilling' />
                <div className='centered-text'>
                    <h1>Machining</h1>
                </div>
            </div>
            <Container fluid="md">
                <div className='bodyContent'>
                    <Row>
                        <Col md={12} lg={6}>
                            <h2>
                                Our Engineers Have Over 100 Years of Combined Experience Building and Maintaining Manufacturing Equipment.
                            </h2>
                        </Col>
                        <Col md={12} lg={6}>
                            <p>We can assist your company with machine selection, setup, and troubleshooting.</p>
                            <p>Contact us today to speak with one of our engineers about a solution for your business.</p>
                        </Col>
                    </Row>
                    <div className='bottom-section'>
                        <Row>
                            <h4>MetalWorx Manufacturing offers a wide variety of machining services, including:</h4>
                        </Row>
                        <Row>
                            <CardGroup>
                                <Col md={6} lg={3}>
                                    <Card className='machining-group'>
                                        <Card.Img variant="top" src={CompleteBuilds} />
                                        <Card.Body>
                                            <Card.Title><h5>Complete Builds</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='machining-group'>
                                        <Card.Img variant="top" src={Retooling} />
                                        <Card.Body>
                                            <Card.Title><h5>Re-Tooling</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='machining-group'>
                                        <Card.Img variant="top" src={Rework} />
                                        <Card.Body>
                                            <Card.Title><h5>Minor Re-Work</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={3}>
                                    <Card className='machining-group'>
                                        <Card.Img variant="top" src={Casting} />
                                        <Card.Body>
                                            <Card.Title><h5>Castings</h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </CardGroup>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default MachiningPage;