
import CustomInput from './CustomInput.jsx'
import '../styles/Section.css';

function Section({ title, inputs }) {
    return (
        <div className="section-container">
            <h1>{title}</h1>
            <ul>
                {inputs && inputs.map((input) => {
                    return <CustomInput key={input.label} type={input.type} label={input.label} placeholder={input.placeholder} optText={input.optText} />
                })}
            </ul>
            <div className="button-container">
                <button>Edit</button>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Section;