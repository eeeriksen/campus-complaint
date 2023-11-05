import './Home.css'
import { posts } from '../database/posts.js'
import { useState } from 'react'
import Complaint from '../components/Complaint'

function Home() {
    const [latestPosts, setLatestPosts] = useState(posts)

    return (
        <main className='home'>
            <div className='latest'>
                <span>Complaints</span>
                <button>Make a complaint</button>
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
                        />
                    })
                }
            </section>
        </main>
    )
}

export default Home