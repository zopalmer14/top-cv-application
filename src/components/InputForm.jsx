
import CustomInput from './CustomInput.jsx'
import '../styles/InputForm.css';

function InputForm({ title, inputs, onSubmit }) {
    return (
        <form className="input-form" onSubmit={onSubmit}>
            <h1>{title}</h1>
            <ul>
                {inputs && inputs.map((input) => {
                    return (
                        <CustomInput 
                            key={input.label} 
                            type={input.type} 
                            label={input.label} 
                            name={input.name}
                            placeholder={input.placeholder} 
                            optText={input.optText} 
                        />
                    )
                })}
            </ul>
            <div className="button-container">
                <button type="reset">Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default InputForm;