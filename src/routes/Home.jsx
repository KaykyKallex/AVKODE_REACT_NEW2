import {  } from 'react'
import './HomeStyle.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {

  return (
    <>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.indivstock.com/static40/preview2/stock-vector-live-603164.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Segurança</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.indivstock.com/static40/preview2/stock-vector-live-603164.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Agilidade</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.indivstock.com/static40/preview2/stock-vector-live-603164.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='sobre-page'>
      <Image src="https://c4.wallpaperflare.com/wallpaper/59/531/787/5bd0338b20c50-wallpaper-preview.jpg" fluid />;
      <h1 id='sbpH1'>teste</h1>
      <p id='sbpP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div className='contato-page'>
    <Form>
    <h1 id='contato-h1'>Entre em Contato</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Endereço Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Digite sua mensagem</Form.Label>
        <Form.Control as="textarea" rows={3} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>    
    </>
  )
}

export default Home
