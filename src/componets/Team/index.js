import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {

    const primaryStyle = { backgroundColor: props.secondaryColor }
    const secondaryStyle = { borderColor: props.primaryColor }

    return (
        (props.collaborators.length > 0) ? 
        
        <section className='team' style={primaryStyle}>
            <h3 style={secondaryStyle}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => 
                    <Collaborator 
                        corDeFundo={props.primaryColor} 
                        key={collaborator.name} 
                        name={collaborator.name} 
                        cargo={collaborator.cargo} 
                        image={collaborator.imagem}
                    />)}
            </div>
        </section>
        : ''
    )
}

export default Team