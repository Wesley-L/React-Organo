import './CampText.css'

const CampText = (props) => {
    
    const modifierPlaceholder = `${props.placeholder}`

    const whenTyping = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="camp-text">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyping} required={props.mandotory} placeholder={modifierPlaceholder} />
        </div>
    )
}

export default CampText

