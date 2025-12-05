export default function SolutionCard({icon = '', title = '', text = '', features = []}) {
    return (
        <div className="card h-100 border border-light-subtle shadow-sm rounded-4 p-4" style={{ maxWidth: '' }}>
            <div className="card-body p-0">

                {/* --- Ícone com Fundo Azul Claro --- */}
                <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 mb-4"
                    style={{ width: '60px', height: '60px' }}
                >
                    {/* Ícone de código do Bootstrap */}
                    <i className={`bi ${icon} text-primary fs-3`}></i>
                </div>

                {/* --- Título --- */}
                <h4 className="card-title fw-bold text-dark mb-3">
                    {title}
                </h4>

                {/* --- Descrição --- */}
                <p className="card-text text-secondary mb-4">
                    {text}
                </p>

                {/* --- Linha Divisória (Divider) --- */}
                <hr className="border-secondary opacity-25 mb-4" />

                {/* --- Lista de Itens --- */}
                <ul className="list-unstyled mb-0">
                    {features.map((item, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                            {/* "Bullet point" personalizado usando ícone */}
                            <i
                                className="bi bi-circle-fill text-primary me-3"
                                style={{ fontSize: '6px' }}
                            ></i>
                            <span className="text-secondary fw-medium">{item}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}