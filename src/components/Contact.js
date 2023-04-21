import Container from 'react-bootstrap/Container';
import ContactHeader from '../images/contact-header.jpg';
import { Row, Col } from 'react-bootstrap';
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';

import '../styles/Main.css';

function ContactPage() {

    const [formStatus, setFormStatus] = useState('Send')
    const [formSubmitted, setFormSubmitted] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, phone, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
        }
        console.log(conFom)
        setFormSubmitted(true)
    }

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
                        <Col md={12}>
                            <h2>Contact us now for your metal manufacturing needs.</h2>
                        </Col>
                    </Row>
                    <Row className='contact-address'>
                        <Col md={12} lg={{ span: 6, offset: 1 }}>
                            { formSubmitted ? 
                                <div className='form-confirm'>
                                    <BsCheckLg className='confirmed' />
                                    <h3>Thank You!</h3>
                                    <h5>The form was submitted successfully.</h5>
                                    <p>We will contact you soon.</p>
                                </div>
                            : 
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="name">
                                            Name
                                        </label>
                                        <input className="form-control" type="text" id="name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="email">
                                            Email
                                        </label>
                                        <input className="form-control" type="email" id="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <input className="form-control" type="tel" id="phone"
                                            placeholder="(262) 123-4567"
                                            pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
                                            required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea className="form-control" id="message" required />
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button className="btn btn-primary" type="submit" size="lg">
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            } 

                        </Col>
                        <Col md={12} lg={{ span: 4, offset: 1 }}>
                            <h5>MetalWorx Manufacturing Company</h5>
                            <p><FiMapPin className='icon' /> 122 West Main Street<br></br>
                                Kenosha, WI, 53140</p>
                            <p><FiPhone className='icon' /> Toll free: 800-800-8000</p>
                            <p><FiMail className='icon' /> <a href="mailto:someone@example.com">engineering@metalworx.com</a></p>
                            <p>Visit us on Twitter and Facebook.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ContactPage;