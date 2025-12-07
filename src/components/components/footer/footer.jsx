import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="py-5 border-top border-secondary">
      <div className="container">
        <div className="row">
          {/* Coluna 1: Branding e Descrição */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3 text-light">
              <img src="favicon.svg" alt="" className='me-2' />Caio Carvalho
            </h5>
            <p className="text-secondary pe-lg-5">
              Desenvolvedor especializado em criar soluções digitais que geram resultados reais.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3 text-light">Navegação</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary hover-primary">
                  Início
                </a>
              </li>
              <li className="mb-2">
                <a href="#servicos" className="text-decoration-none text-secondary hover-primary">
                  Serviços
                </a>
              </li>
              <li className="mb-2">
                <a href="#projetos" className="text-decoration-none text-secondary hover-primary">
                  Projetos
                </a>
              </li>
              <li className="mb-2">
                <a href="#contato" className="text-decoration-none text-secondary hover-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Conecte-se (Ícones) */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3 text-light">Conecte-se</h6>
            <div className="d-flex gap-2">

              <a href="https://www.instagram.com/caiosolutions.dev/" title='@caiosolutions.dev' className="d-flex align-items-center justify-content-center bg-light text-dark rounded p-2 text-decoration-none" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-instagram"></i>
              </a>

              {/* Botão Github/Git */}
              <a href="https://github.com/caiocarvalho14" target='_blank' className="d-flex align-items-center justify-content-center bg-light text-dark rounded p-2 text-decoration-none" style={{ width: '40px', height: '40px' }}>
                <i className='bi bi-github'></i>
              </a>

              {/* Botão LinkedIn */}
              <a href="https://www.linkedin.com/in/caio-carvalho-326269358/" target='_blank' className="d-flex align-items-center justify-content-center bg-light text-dark rounded p-2 text-decoration-none" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-linkedin"></i>
              </a>

              {/* Botão Email */}
              <a href="mailto:caioscphb@gmail.com" title='caioscphb@gmail.com' className="d-flex align-items-center justify-content-center bg-light text-dark rounded p-2 text-decoration-none" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divisor Horizontal */}
        <hr className="my-5 text-secondary opacity-25" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-secondary small mb-0">
              &copy; 2025 Caio Carvalho. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;