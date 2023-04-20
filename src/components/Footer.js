import '../styles/Main.css';
import MetalworxLogo from '../images/metalworx_logo.png';
import { Row, Col, Container } from 'react-bootstrap';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <Container fluid="md">
                <Row>
                    <Col md={12} lg={4}>
                        <div className='footer-logo'>
                            <a href={"/"}><img src={MetalworxLogo} alt='Metal works logo' width={200} fluid /></a>
                        </div>
                    </Col>
                    <Col md={12} lg={2}>
                        <ul>
                            <li className='footer-nav'><Nav.Link as={Link} to={"/"}>Home</Nav.Link></li>
                            <li className='footer-nav'><Nav.Link as={Link} to={"/about"}>About</Nav.Link></li>
                            <li className='footer-nav'><Nav.Link as={Link} to={"/machining"}>Machining</Nav.Link></li>
                        </ul>
                    </Col>
                    <Col md={12} lg={2}>
                        <ul>
                            <li className='footer-nav'><Nav.Link as={Link} to={"/products"}>Products</Nav.Link></li>
                            <li className='footer-nav'><Nav.Link as={Link} to={"/castings"}>Castings</Nav.Link></li>
                            <li className='footer-nav'><Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link></li>
                        </ul>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className='icons'>
                            <a className='twitter' href="https://twitter.com/"><BsTwitter fontSize={26} /></a>
                            <a className='facebook' href="https://facebook.com"><FaFacebookF fontSize={26} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;