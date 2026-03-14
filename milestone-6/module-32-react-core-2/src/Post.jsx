export default function Post({ post }) {

    // const { title, body } = post;

    return (
        <div className="custom">
            <h3>{post.title}</h3><br />
            <p>{post.body}</p>
        </div>
    )
}