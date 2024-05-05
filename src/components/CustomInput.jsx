
import '../styles/CustomInput.css';

function CustomInput({ type, label, name, placeholder, optText }) {
    return (
        <li>
            <div>
                <label htmlFor={name}>{label}</label>
                {optText && <div className="opt">{optText}</div>}
            </div>
            <input type={type} name={name} id={name} placeholder={placeholder} />
        </li>
    )
}

export default CustomInput;