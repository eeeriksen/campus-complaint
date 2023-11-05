import UpArrow from '../icons/UpArrow'
import Comment from '../icons/Comment'
import './Complaint.css'

// eslint-disable-next-line react/prop-types
function Complaint({ subject, username, created, upvotes, comments }) {

    // eslint-disable-next-line react/prop-types
    const numComments = comments.length
    // eslint-disable-next-line react/prop-types
    const numUpvotes = upvotes.length

    return (
        <article className='complaint'>
            <div className='left'>
                <span className='up'>
                    <span>{numUpvotes}</span><UpArrow />
                </span>
                <span className='comment'>
                    <span>{numComments}</span><Comment />
                </span>
            </div>
            <div className='right'>
                <div className='head'>
                    <span className="username">{username}</span>
                    <span className="date">{created}</span>
                </div>
                <p className='subject'>{subject}</p>
            </div>
        </article>
    )
}

export default Complaint