import {  } from 'react'
import { Link } from 'react-router-dom'
import './NavBarStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  return (
    <>
      {/* <Link to= '/' >Home</Link> 
      <Link to= '/Produtos' >Produtos</Link> */}

      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <a href='#home'><img src='src/assets/AVKODE-removebg-preview.png' className='img-nav'></img></a>
        <Navbar.Brand href="#home">AVKODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#link">Sobre</Nav.Link>
            <NavDropdown title="Mais..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contato</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Portifólio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Agradecimentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Rodapé
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavBar
