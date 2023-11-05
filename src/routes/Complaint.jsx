import { useParams } from "react-router-dom"
import { posts } from "../database/posts"

export function App() {
    // get current id from url
    const { id } = useParams()
    // get post from posts array
    const post = posts.find(post => post.postId === id)
    // get comments from post
    const comments = post.comments
    // get upvotes from post
    const upvotes = post.upvotes

    return (
        <div className="post-container">
            {upvotes.length}
            <h2 className="post-title">{post.subject}</h2>
            <p className="post-body">{post.content}</p>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.commentId} className="comment">
                            <p className="comment-body">{comment.body}</p>
                            <p className="comment-username">{comment.username}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}