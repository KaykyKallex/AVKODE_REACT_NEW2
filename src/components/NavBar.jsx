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

      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <a href='#Inicio'><img src='src/assets/AVKODE-removebg-preview.png' className='img-nav'></img></a>
        <Navbar.Brand href="#Inicio">AVKODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Início</Nav.Link>
            <Nav.Link href="#SobreNos">Sobre</Nav.Link>
            <NavDropdown title="Mais..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#Contato">Contato</NavDropdown.Item>
              <NavDropdown.Item href="#Portifolio">
                Portifólio
              </NavDropdown.Item>
              <NavDropdown.Item href="#Agradecimentos">Agradecimentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#footer">
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
