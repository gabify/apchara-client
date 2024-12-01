import {Link} from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap'

const BottomNav = () => {
    return ( 
        <Navbar fixed='bottom' className="bg-body-tertiary">
            <Container className="d-flex justify-content-center">
                <Nav justify variant="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">
                            <Link to="/">
                                <i className="bi bi-house-door-fill fs-3"></i>
                                
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                            <Link to="/order">
                                <i className="bi bi-bag-fill fs-3"></i>
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">
                            <Link to="/profile">    
                                <i className="bi bi-person-circle fs-3"></i>
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default BottomNav;