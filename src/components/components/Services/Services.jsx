import './services.css'
import Solutions from './solutions/solutions'
export default function Services(){
    return (
        <div className="min-page services d-flex flex-column justify-content-evenly p-4" id='servicos'>
            <div className='text-center'>
                <h1 className='text-white'>Serviços que <strong className='text-primary'>Impulsionam</strong> Resultados</h1>
                <h1 className='text-secondary fs-4'>Soluções completas para levar seu negócio ao próximo nível</h1>
            </div>
            <div className='d-flex justify-content-center  w-100 align-items-center h-100'>
                <Solutions/>
            </div>
        </div>
    )
}