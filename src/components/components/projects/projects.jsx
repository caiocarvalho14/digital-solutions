import ProjetosContainer from "./container/projectscontainer"
export default function Projects(){
    return(
        <div className="min-page border-top border-secondary d-flex flex-column justify-content-evenly py-5" id="projetos">
            <div className="text-center">
                <h1 className="text-light">Projetos <strong className="text-primary">Realizados</strong></h1>
                <h1 className='text-secondary fs-4'>Cada projeto é único e desenvolvido com excelência</h1>
            </div>
            <ProjetosContainer/>
        </div>
    )
}