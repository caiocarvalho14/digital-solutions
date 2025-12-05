import './solutions.css'
import SolutionCard from './solutionCard';
export default function Solutions() {
    return (
        <div className="row container justify-content-center h-100 justify-content-sm-start g-4" style={{ overflowX: 'auto', padding: '25px 0', flexWrap: 'nowrap' }}> {/* g-4 dá o espaçamento entre as colunas */}

            <div className=" col-md-6  col-lg-4 d-flex justify-content-center">
                <SolutionCard 
                features={['Carregamento rápido', 'Layout exclusivo alinhado à sua marca', 'Totalmente otimizado para SEO (busca no navegador)']}
                icon={'bi-code-slash'}
                title={'Sites Modernos e Rápidos'}
                text={'Desenvolvimento de sites intuitivos, responsivos e com visual profissional para fortalecer sua presença digital.'} />
            </div>

            <div className=" col-md-6  col-lg-4 d-flex justify-content-center">
                <SolutionCard 
                icon={'bi-lightning'} 
                title={'Automação de Processos'} 
                text={'Criação de bots e fluxos automatizados que economizam tempo, reduzem tarefas repetitivas e aceleram o crescimento do negócio.'} 
                features={['Reduz custos operacionais', 'Aumenta produtividade', 'Menos erros humanos']} />
            </div>

            <div className=" col-md-6  col-lg-4 d-flex justify-content-center">
                <SolutionCard 
                features={['Funcionalidades feitas sob medida', 'Escaláveis para acompanhar seu crescimento', 'Maior controle e eficiência no dia a dia']} 
                icon={'bi-stars'} 
                title={'Soluções Personalizadas'} 
                text={'Desenvolvimento de sistemas exclusivos, criados para atender exatamente às necessidades do seu negócio.'} />
            </div>

        </div>
    )
}