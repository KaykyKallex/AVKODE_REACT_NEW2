import {  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Iframe from 'react-iframe';
import './FooterStyle.css'

function Footer() {

  return (
    <>
    <section id='footer'>
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Sobre Nós</h4>
            <p>A AVKODE é uma empresa especializada em desenvolvimento de software.</p>
          </div>
          <div className="col-md-4">
            <h4>Links Úteis</h4>
            <ul className="list-unstyled">
              <li><a href="#Inicio">Página Inicial</a></li>
              <li><a href="#Portifolio">Portifólio</a></li>
              <li><a href="#Contato">Contato</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociais</h4>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><FaFacebook /></a></li>
              <li className="list-inline-item"><a href="#"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="#"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>Newsletter</h4>
            <p>Inscreva-se na nossa newsletter para receber atualizações e ofertas especiais:</p>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Seu E-mail" />
                <div className="input-group-append">
                  <button className="btn btn-success" type="submit">Inscrever</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h4>Localização</h4>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3249097204857!2d-46.73036142453669!3d-23.520813660104004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8c1d371ec31%3A0x671c9325c275132e!2sETEC%20Prof%C2%B0%20Basilides%20de%20Godoy!5e0!3m2!1spt-BR!2sbr!4v1698971098143!5m2!1spt-BR!2sbr"
              width="100%"
              height="200"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </div>
        </div>
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} AVKODE SERVICOS DE INFORMATICA LTDA - 78.800.478/0001-93
        </div>
      </div>
    </footer>
    </section>
    </>
  )
}

export default Footer
