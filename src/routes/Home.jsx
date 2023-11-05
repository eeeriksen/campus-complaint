import './Home.css'
import { posts } from '../database/posts.js'
import { useState } from 'react'
import Complaint from '../components/Complaint'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [latestPosts, setLatestPosts] = useState(posts)

    return (
        <main className='home'>
            <div className='latest'>
                <span>Complaints</span>
                <button onClick={() => navigate('/make-complaint')}>Make a complaint</button>
            </div>
            <section>
                {
                    latestPosts.map(post => {
                        return <Complaint
                            key={post.postId}
                            title={post.subject}
                            subject={post.subject}
                            username={post.username}
                            created={post.created}
                            comments={post.comments}
                            upvotes={post.upvotes}
                            onClick={() => navigate('/complaint/' + post.postId)}
                        />
                    })
                }
            </section>
        </main>
    )
}

export default Home