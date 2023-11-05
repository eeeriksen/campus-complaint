import { useNavigate } from 'react-router-dom'
import './MakeComplaint.css'
import { useState } from 'react'

export function MakeComplaint() {
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        console.log('title: ', title)
        console.log('body: ', body)
        navigate('/')
    }

    return (
        <div className='make-complaint'>
            <h2>Create a complaint</h2>
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={(e) => handleClick(e)}>Create Post</button>
                </div>
            </form>
        </div>
    )
}
