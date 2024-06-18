import './Form.css'
import CampText from '../CampText'
import ListDrop from '../ListDrop'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('') 
    const [time, setTime] = useState('')
    
  
    const whenSaving = (event) => {
        event.preventDefault()
        props.toCollaboratorRegistered({
            name,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='form'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <CampText
                    mandotory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={name}
                    changed={valor => setNome(valor)}            
                />

                <CampText
                    mandotory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    changed={valor => setCargo(valor)}
                
                />

                <CampText
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    changed={value => setImagem(value)}
                />

                <ListDrop
                    mandotory={true}
                    label="Times"
                    itens={props.teamsList}
                    value={time}
                    changed={valor => setTime(valor)}
                    
                />

                {/* <Button  text="Criar Card"/> */}
        
                <Button>
                    Criar Card
                </Button>

            </form>
        </section>
    )
}

export default Form