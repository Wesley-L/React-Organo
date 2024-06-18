import './ListDrop.css'

const ListDrop = (props) => {
    return (
        <div className='list-drop'>
            <label>{props.label}</label>
            <select onChange={event => props.changed(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListDrop