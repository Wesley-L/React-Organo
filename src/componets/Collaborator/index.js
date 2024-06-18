import './Collaborator.css'

const Collaborator = ({ name, image, cargo, corDeFundo }) => {

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={image} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h3>{cargo}</h3>
            </div>
        </div>
    )
}

export default Collaborator