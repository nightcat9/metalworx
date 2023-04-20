import Container from 'react-bootstrap/Container';
import CastingsHeader from '../images/castings-header.jpg';
import CastingGuy from '../images/project1_5.jpg';
import GearPiece from '../images/project1_3.jpg';
import { Row, Col } from 'react-bootstrap';


import '../styles/Main.css';

function CastingsPage() {
    return (
        <div className='castingsPage'>
            <div className='castingsHeader'>
                <img src={CastingsHeader} alt="Pouring hot metal into mold" className='castings' />
                <div className='centered-text'>
                    <h1>Castings</h1>
                </div>
            </div>
            <Container fluid="md">
                <div className='bodyContent'>
                    <Row>
                        <Col md={12} lg={6}>
                            <h2>
                                MetalWorx Manufacturing Company collaborates with our customers to
                                develop effective, efficient casting designs.
                            </h2>
                        </Col>
                        <Col md={12} lg={6}>
                            <p>
                                Our focus is on completing the development process by adding value and integrity.
                            </p>
                            <p>
                                By leveraging our in-house casting skills, we are able to provide ready-to-assemble
                                components in a shorter period of time than other companies in our industry.
                                That means you are up and running faster, and servicing your customers at a higher level.
                            </p>
                            <p>
                                Contact us now to speak to one of our engineers about our high quality casting services.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className='casting-img'>
                                <img className='img-fluid' src={CastingGuy} alt="employee pouring hot metal in casting" width={500} />
                            </div>

                        </Col>
                        <Col sm={12} md={6}>
                            <div className='casting-img'>
                                <img className='img-fluid' src={GearPiece} alt="Metal gear" width={500} />
                            </div>

                        </Col>
                    </Row>
                </div>

            </Container>
        </div>

    );
}

export default CastingsPage;