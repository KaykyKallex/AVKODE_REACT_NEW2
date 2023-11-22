import { } from 'react'
import './HomeStyle.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { motion, useScroll, useSpring } from "framer-motion";
import myImage from './theus.jpeg';
import myImage1 from './edu.jpeg';
import Slide from 'react-reveal/Slide';

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <section id='Inicio'>
        <div className='inicio'>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.licdn.com/dms/image/D5612AQFS3trm7vCATA/article-cover_image-shrink_600_2000/0/1681835164860?e=2147483647&v=beta&t=sonwAi13lsck58ERgUzg_540Dq-STi2ViD5wYMq6D98"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5></h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static01.nyt.com/images/2020/12/23/business/23Techfix-illo/23Techfix-illo-articleLarge.gif?quality=75&auto=webp&disable=upscale"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Agilidade</h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static.ffx.io/images/$zoom_0.816%2C$multiply_2%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_620%2Cq_88%2Cf_auto/f6d3e991fd8cc59f89c35ad89a219d11aae87f68"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5></h5>
                <p>

                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      
      <section id='SobreNos'>
        <div className='sobre-page'>
          <Slide bottom>
          <h1 id='sbpH1'>Sobre Nós</h1>
          <Image src="https://c4.wallpaperflare.com/wallpaper/59/531/787/5bd0338b20c50-wallpaper-preview.jpg" fluid />;
          <p id='sbpP'>A AVKODE é uma empresa especializada em desenvolvimento de software, oferecendo soluções confiáveis e personalizadas. Nossa principal missão é impulsionar o sucesso de nossos clientes, criando produtos de alta qualidade em um ambiente tecnologicamente desafiador e em constante mudança. Acreditamos no poder da tecnologia para transformar negócios e estamos comprometidos em fornecer as melhores soluções para atender às necessidades de nossos clientes.</p>
        </Slide>
        </div>
      </section>
      

      <Slide bottom>
      <section id='Contato'>
        <div className='contato-page'>
          <Form className='cnt-page'>
            <h1 id='contato-h1'>Entre em Contato</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Endereço Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Digite sua mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </section>
      </Slide>

      <div className='divisor'></div>


      <section id='Portifolio'>
        <div className='portifolio-page'>
          <h1 id='portifolio-h1'>Nossos Trabalhos</h1>
          <div className='pPOrtifolio-page'>
          <Slide bottom>
            <Image className='img-port' src="https://c4.wallpaperflare.com/wallpaper/59/531/787/5bd0338b20c50-wallpaper-preview.jpg" fluid />;
            <p id='pPort'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Image className='img-port' src="https://c4.wallpaperflare.com/wallpaper/59/531/787/5bd0338b20c50-wallpaper-preview.jpg" fluid />;
            <p id='pPort'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Slide>
          </div>
        </div>
      </section>

      <section id='Agradecimentos'>
        <div className='Agradecimentos-page'>
        <Slide left>
          <h1 id='Agradecimentos-h1'>Equipe AVKODE</h1>
          <div className='Agradecimentos-img'>
            <Image className='img-agrd' src="https://media.licdn.com/dms/image/D4D03AQH7Xo4n4dUVeQ/profile-displayphoto-shrink_200_200/0/1681913003048?e=1706140800&v=beta&t=BzzHvKZNqR-sUzKKytHvFKkgyrcQPdmWwtRZCq90NuI" fluid />;
            <p id='agrP'>Carlos Eduardo</p>
            <Image className='img-agrd' src={myImage1} fluid />;
            <p id='agrP'>Eduardo Pereira</p>
            <Image className='img-agrd' src="https://media.licdn.com/dms/image/D4E03AQHnDcnP-jviDA/profile-displayphoto-shrink_200_200/0/1692973791724?e=1705536000&v=beta&t=1Bo_GM9v3WpBzw3cbCoqEEzLGTYrJJHg0oQ3U2wG_K8" fluid />;
            <p id='agrP'>Kayky de Souza</p>
            <Image className='img-agrd' src={myImage} fluid />;
            <p id='agrP'>Matheus Ferreira</p>
            <Image className='img-agrd' src="https://media.licdn.com/dms/image/D4D03AQFuB0sXF2h5Ag/profile-displayphoto-shrink_200_200/0/1697399435451?e=1705536000&v=beta&t=0Yh1e8k5pDR381Bg_BwxnBEF77C-vzjUp8CgvUBo8fU" fluid />;
            <p id='agrP'>Victor Massao</p>  
          </div>
          </Slide>
        </div>
      </section>
    </>
  )
}

export default Home
