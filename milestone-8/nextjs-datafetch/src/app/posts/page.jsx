

const PostsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();


    return (
        <div>

            <h1>Posts are coming soon! {posts.length}</h1>
            
        </div>
    );
};

export default PostsPage;