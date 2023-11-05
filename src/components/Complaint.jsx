import './Complaint.css'

// eslint-disable-next-line react/prop-types
function Complaint({ title, description, username, date }) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
        </article>
    )
}

export default Complaint