import Container from 'react-bootstrap/Container';
import AboutHeader from '../images/about-header.jpg';
import { Row, Col, CardGroup, Card } from 'react-bootstrap';
import Employee from '../images/employee.jpg';
import Meeting from '../images/meeting.jpg';
import '../styles/Main.css';

function AboutPage() {
    return (
        <div className='aboutPage'>
            <div className='aboutHeader'>
                <img src={AboutHeader} alt="Machine drilling into metal" className='drilling-metal' />
                <div className='centered-text'>
                    <h1>What We're About</h1>
                </div>
            </div>
            <Container fluid="md">
                <div className='bodyContent'>
                    <Row>
                        <Col md={12} lg={6}>
                            <h2>
                                MetalWorx Began in 1969, and Is Headquartered in Kenosha, Wisconsin.
                            </h2>
                        </Col>
                        <Col md={12} lg={6}>
                            <p>
                                We are a producer of machined and ready-to-assemble aluminum castings to a growing list of customers worldwide.
                            </p>
                            <p>
                                MetalWorx is dedicated to customer satisfaction and building long-term relationships.
                                We work with customers to first define their needs and then provide a high-quality, cost effective solution.
                                We constantly work to improve our products and services to meet our customers evolving needs.
                            </p>
                            <p>
                                Our staff can also collaborate with you to develop effective, efficient casting designs.
                                We add value to the process by integrating our in-house machining skills with outside services to provide ready-to-assemble components.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className='about-img'>
                                <img className='img-fluid' src={Employee} alt="employee working in metal manufacturing company" width={500} />
                            </div>

                        </Col>
                        <Col sm={12} md={6}>
                            <div className='about-img'>
                                <img className='img-fluid' src={Meeting} alt="employees having meeting" width={500} />
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default AboutPage;