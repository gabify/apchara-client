import { Navbar, Container } from "react-bootstrap";

const TopNav = () => {
    return ( 
        <Navbar className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">Appchara</Navbar.Brand>
            </Container>
        </Navbar>
     );
}
 
export default TopNav;