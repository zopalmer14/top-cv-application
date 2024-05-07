
import '../styles/ResumeHeader.css';

function ResumeHeader({ name, email, phone, address }) {
    return (
        <header>
            {name && <h1>{name}</h1>}
            <div className='opt-info'>
                {email && (
                    <div>
                        <span className='material-icons'>email</span>
                        {email}
                    </div>
                )}
                {phone && (
                    <div>
                        <span className='material-icons'>phone</span>
                        {phone}
                    </div>
                )}
                {address && (
                    <div>
                        <span className='material-icons'>location_city</span>
                        {address}
                    </div>
                )}
            </div>
        </header>
    )
}

export default ResumeHeader;