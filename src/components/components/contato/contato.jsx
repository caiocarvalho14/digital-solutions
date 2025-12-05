import './style.css'
export default function Contato() {
    return (
        <div className="contato text-dark d-flex w-100 h-100 justify-content-center align-items-center border-top border-secondary py-5" id='contato'>
            <div className='contato-container p-5 rounded text-center'>
                <h1 className='mb-4 fw-bold'>Pronto para <strong className='text-primary'>Transformar</strong> Seu Negócio?</h1>
                <h1 className='text-secondary fs-4'>Vamos conversar sobre como posso ajudar a alcançar seus objetivos com tecnologia de ponta</h1>
                <div className='d-flex flex-column justify-content-center gap-4 flex-sm-row align-items-center py-3'>
                    <a href="mailto:caioscphb@gmail.com" className='btn btn-outline-dark'><i className='bi bi-envelope mx-2'></i> Enviar Email <i className='bi bi-arrow-right'></i></a>
                    <a href="https://wa.me/86995633313" className='btn btn-primary'><i className='bi bi-chat-left mx-2'></i> WhatsApp</a>
                </div>
                <hr />
                <small className=' text-secondary'>Resposta em até 24h • Consulta gratuita • Sem compromisso</small>
            </div>
        </div>
    )
}