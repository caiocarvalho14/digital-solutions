export default function Hero() {
    return (
        <div className="min-page hero d-flex flex-column justify-content-evenly align-items-center">
            <span className="badge">
            <i className="bi bi-stars"></i>    Desenvolvimento Digital de Alto Impacto
            </span>
            <div className="text-center p-4">
                <h1 className="text-white lh-1">Transforme Seu Negócio com</h1>
                <h1 className="text-primary fw-bold mb-4">Soluções Digitais</h1>
                <h1 className="fs-5 text-secondary border-bottom border-secondary py-3">
                    Websites profissionais, automações inteligentes e soluções <br className="d-none d-sm-block" />
                personalizadas que geram resultados reais para o seu negócio.</h1>
                <a href="https://caiocarvalho.dev.br" target="_blank" className="btn text-dark-emphasis fs-9">www.caiocarvalho.dev.br</a>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-4">
                <a href="#" className="btn btn-primary">
                    Quero uma Solução <i className="bi bi-arrow-right"></i>
                </a>
                <a href="#projetos" className="btn btn-light">
                    Ver Projetos
                </a>
            </div>
            <div>

            </div>
        </div>
    )
}