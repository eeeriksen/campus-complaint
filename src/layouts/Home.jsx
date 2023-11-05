import './Home.css'
import { posts } from '../database/posts.js'
import { useState } from 'react'
import Complaint from '../components/Complaint'

function Home() {
    const [latestPosts, setLatestPosts] = useState(posts)

    return (
        <main className='home'>
            <div className='header'>
                <span>Latest complaints</span>
                <button>Make a complaint</button>
            </div>
            <section>
                {
                    latestPosts.map(post => {
                        return <Complaint
                            key={post.postId}
                            title={post.subject}
                            content={post.content}
                            username={post.username}
                            created={post.created}
                        />
                    })
                }
            </section>
        </main>
    )
}

export default Home