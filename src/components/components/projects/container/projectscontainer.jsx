import React from 'react';
import './style.css'
const ProjetosContainer = () => {
    // Dados simulados para manter o código limpo e organizado
    const projects = [
        {
            id: 0,
            category: "Website Institucional",
            title: "Monteiro & Associados | Advocacia Empresarial",
            description: "Website institucional desenvolvido para escritório de advocacia especializado em Direito Empresarial, com foco na proteção patrimonial e segurança jurídica de empresas e executivos.",
            tags: [
                "Website Institucional",
                "UX/UI Design",
                "Branding Jurídico",
                "Direito Empresarial",
                "Conversão",
            ],
            headerStyle: {
                background: "linear-gradient(135deg, #0f2a44 0%, #0b1f33 100%)",
                color: "#ffffff"
            },
            link: "https://monteiroassociados.vercel.app",
            iconColor: "text-white",
            image: "monteiroassociados.png"
        },
        {
            id: 0,
            category: "Website Institucional",
            title: "EngeCivil | Engenharia Civil & Projetos",
            description: "Website institucional desenvolvido para empresa de engenharia civil especializada em projetos, obras e consultoria técnica, com foco em excelência técnica, conformidade normativa, gestão eficiente de prazos e custos, e geração de oportunidades comerciais.",
            tags: [
                "Website Institucional",
                "Engenharia Civil",
                "Projetos de Engenharia",
                "UX/UI Profissional",
                "Conversão",
                "Credibilidade Técnica"
            ],
            headerStyle: {
                background: "linear-gradient(135deg, #0f2a44 0%, #0b1f33 100%)",
                color: "#ffffff"
            },
            link: "https://engecivil.vercel.app",
            iconColor: "text-white",
            image: "engecivil.png"
        },
        {
            id: 0,
            category: "Landing Page",
            title: "Rosa & Pérola | Moda e Acessórios",
            description: "Landing Page institucional desenvolvida para marca de moda e acessórios femininos, com foco em elegância, identidade visual sofisticada e apresentação de produtos de forma clara e atrativa, fortalecendo a marca e estimulando o contato comercial.",
            tags: [
                "Landing Page",
                "Moda e Acessórios",
                "UX/UI Design",
                "Branding",
                "Conversão"
            ],
            headerStyle: {
                background: "linear-gradient(135deg, #0f2a44 0%, #0b1f33 100%)",
                color: "#ffffff"
            },
            link: "https://rosaeperola.vercel.app",
            iconColor: "text-white",
            image: "rosaeperola.png"
        },
        {
            id: 2,
            category: "Landing Page",
            title: "Mercantil Nicolau",
            description: "Landing page moderna e responsiva criada para organizar e destacar as ofertas, informações institucionais e canais de contato de um comércio local. Estruturada com boas práticas de SEO, carregamento rápido e experiência otimizada para dispositivos móveis.",
            tags: ["React", "Vite", "SEO"],
            // Gradiente escuro similar ao da imagem (Dark Blue/Grey)
            headerStyle: {
                background: "linear-gradient(135deg, #343a40 0%, #212529 100%)",
                color: "#fff"
            },
            link: 'https://mercantil-nicolau.vercel.app/',
            iconColor: "text-white",
            image: 'landingpage.png'
        },
        {
            id: 1,
            category: "Website",
            title: "Gerenciador de Contas Financeiras",
            description: "Plataforma completa para gestão financeira empresarial, permitindo controlar contas a pagar e a receber, automatizar processos e visualizar indicadores em tempo real. Desenvolvido com foco em segurança, escalabilidade e usabilidade para empresas de diferentes portes.",
            tags: ["Python", "Django", "IA", "Render", "API's"],
            // Gradiente escuro similar ao da imagem (Dark Blue/Grey)
            headerStyle: {
                background: "linear-gradient(135deg, #343a40 0%, #212529 100%)",
                color: "#fff"
            },
            link: 'https://contasapagar.caiocarvalho.dev.br/',
            iconColor: "text-white",
            image: 'scap.png'
        },
        {
            id: 3,
            category: "Landing Page",
            title: "Portfólio Profissional",
            description: "Página pessoal desenvolvida para apresentar identidade profissional, projetos, habilidades e informações de contato. Construída com foco em responsividade, estética minimalista e boa performance para fortalecer presença online.",
            tags: ["React", "Vite", "SEO"],
            // Gradiente escuro similar ao da imagem (Dark Blue/Grey)
            headerStyle: {
                background: "linear-gradient(135deg, #343a40 0%, #212529 100%)",
                color: "#fff"
            },
            link: 'https://caiocarvalho.dev.br/',
            iconColor: "text-white",
            image: 'portfolio.png'
        },
        {
            id: 4,
            category: "Link-In-Bio",
            title: "Página Link-In-Bio Personalizada",
            description: "Link-in-bio personalizado, desenvolvido para centralizar links importantes e facilitar o acesso a redes sociais, contato e páginas externas. Design responsivo, rápido e otimizado para uso em perfis do Instagram e outras plataformas.",
            tags: ["React", "Vite", "CMS", "API's"],
            // Gradiente escuro similar ao da imagem (Dark Blue/Grey)
            headerStyle: {
                background: "linear-gradient(135deg, #343a40 0%, #212529 100%)",
                color: "#fff"
            },
            link: 'https://isasolucoesdigitais.vercel.app/',
            iconColor: "text-white",
            image: 'linkinbio.png'
        }
    ];

    return (
        <div className="container my-5">
            <div className="row g-4">
                {projects.map((project) => (
                    <div key={project.id} className="col-12 col-md-6">
                        <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">

                            {/* Área Superior (Imagem/Preview) */}
                            <a href={project.link} target='_blank' className="project-thumb position-relative" style={{ backgroundImage: `url(${project.image})`, backgroundOrigin: 'start' }}>

                                {/* Overlay que aplica o blur SOMENTE no fundo */}
                                <div className="project-thumb-blur"></div>

                                {/* Ícone */}
                                <div className="project-thumb-icon position-absolute top-50 start-50 translate-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-box-arrow-up-right text-light" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                    </svg>
                                </div>

                            </a>


                            {/* Corpo do Card */}
                            <div className="card-body p-4 d-flex flex-column">

                                {/* Badge de Categoria */}
                                <div className="mb-3">
                                    <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Título e Descrição */}
                                <h4 className="card-title fw-bold mb-3">
                                    {project.title}
                                </h4>
                                <p className="card-text text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                                    {project.description}
                                </p>

                                {/* Tags (Pills) */}
                                <div className="d-flex flex-wrap gap-2 pt-2 border-top">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge bg-light text-secondary border rounded-pill px-3 py-2 fw-normal mt-3"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjetosContainer;