import Container from 'react-bootstrap/Container';
import ContactHeader from '../images/contact-header.jpg';
import { Row, Col } from 'react-bootstrap';
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import '../styles/Main.css';

function ContactPage() {
    return (
        <div className='contactPage'>
            <div className='contactHeader'>
                <img src={ContactHeader} alt="Contact icons for phone and email" className='contact' />
                <div className='centered-text'>
                    <h1>Contact Us Today</h1>
                </div>
            </div>
            <Container fluid="md">
                <div className='bodyContent'>
                    <Row>
                        <Col md={12} lg={6}>
                            <h2>Contact us now for your metal manufacturing needs.</h2>
                        </Col>
                        <Col md={12} lg={6}>
                            <h5>MetalWorx Manufacturing Company</h5>
                            <p><FiMapPin className='icon'/> 122 West Main Street<br></br>
                                Kenosha, WI, 53140</p>
                            <p><FiPhone className='icon'/> Toll free: 800-800-8000</p>
                            <p><FiMail className='icon'/> <a href="mailto:someone@example.com">engineering@metalworx.com</a></p>
                            <p>Visit us on Twitter and Facebook.</p>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
}

export default ContactPage;