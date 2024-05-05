
import '../styles/Section.css';

function Section({ title, children }) {
    return (
        <div className="container">
            <h1>{title}</h1>
            {children}
            <div className="button-container">
                <button>Edit</button>
                <button>Submit</button>
            </div>
        </div>
      )
}

export default Section;