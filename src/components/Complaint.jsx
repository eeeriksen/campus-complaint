import './Complaint.css'

// eslint-disable-next-line react/prop-types
function Complaint({ subject, content, username, created }) {
    return (
        <article>
            <h3>{subject}</h3>
            <p>{content}</p>
            <span className="username">{username}</span>
            <span className="date">{created}</span>
        </article>
    )
}

export default Complaint