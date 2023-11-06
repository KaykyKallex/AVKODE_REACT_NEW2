import {  } from 'react'
import './HomeStyle.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home() {

  return (
    <>
    <div className='inicio'>
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
    </div>
    <div className='sobre-page'>
      <Image src="https://c4.wallpaperflare.com/wallpaper/59/531/787/5bd0338b20c50-wallpaper-preview.jpg" fluid />;
      <h1 id='sbpH1'>Sobre Nós</h1>
      <p id='sbpP'>A AVKODE é uma empresa especializada em desenvolvimento de software, oferecendo soluções confiáveis e personalizadas. Nossa principal missão é impulsionar o sucesso de nossos clientes, criando produtos de alta qualidade em um ambiente tecnologicamente desafiador e em constante mudança. Acreditamos no poder da tecnologia para transformar negócios e estamos comprometidos em fornecer as melhores soluções para atender às necessidades de nossos clientes.</p>
    </div>

    <div className='contato-page'>
    <Form className='cnt-page'>
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
    <div className='portifolio-page'>
    <h1 id='portifolio-h1'>Nossos Trabalhos</h1>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg" thumbnail />
        </Col>
        
        <Col xs={6} md={4}>
          <Image src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
    <div className='pPOrtifolio-page'>
    <p id='pPort'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p id='pPort'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    </div>
    </>
  )
}

export default Home
