import { useState, useEffect } from 'react';
import List from './List';

const Dashboard = () => {
    const [username, setUsername] = useState('Bumblebee');
    const [body, setBody] = useState('');
    const [posts, setPost] = useState([{ username: "BumbleBee", body: "Hey There!", id: "1" }]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [buttonName, setButtonName] = useState('Buzz It!!')

    const handleDelete = (id) => {
        const newPosts = posts.filter(posts => posts.id !== id);
        setPost(newPosts);
    }

    const handleEdit = (id) => {
        const editPost = posts.find(posts => posts.id === id);
        setIsEditing(true);
        setEditID(id);
        setBody(editPost.body);
    }

    const handleSubmit = (e) => {
        if (body && isEditing) {
            setPost(
                posts.map((post) => {
                    if (post.id === editID) {
                        return { ...post, body: body }
                    }
                    return post;
                })
            )
            setBody('');
            setEditID(null);
            setIsEditing(false);
            setButtonName('Buzz It!!')

        }
        else {
            const newPost = posts.concat({ username, body });
            setPost(newPost);
        }
        e.preventDefault();

    }

    return (
        <div className="dash">
            <div className="postArea">
                <div className="createNew">
                    <form className="post-form" onSubmit={handleSubmit}>
                        <input type="text" className="username-box" value={username} onChange={() => setUsername('Bumblebee')} />
                        <textarea
                            name="text-area"
                            placeholder="Create a new post..."
                            onChange={(e) => setBody(e.target.value)}
                            value={body}></textarea>
                        <button className="post-btn">{buttonName}</button>
                    </form>
                </div>
                {posts && <List posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} setButtonName={setButtonName} />}
            </div>

        </div>
    );
}

export default Dashboard;