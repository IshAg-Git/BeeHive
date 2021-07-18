import { useState } from 'react';
import edit from './edit.png';
import bin from './bin.png';
import like from './like.png';
import love from './heart.png';

const List = ({ posts, handleDelete, handleEdit, setButtonName }) => {

    const [countLike, setCount1] = useState(0)
    const [countLove, setCount2] = useState(0)

    const handleLikeClick = () => {
        setCount1(countLike + 1);
    }
    const handleLoveClick = () => {
        setCount2(countLove + 1);
    }

    return (
        <div className="blogList">
            {posts.map((post) => (
                <div className="newPost" key={post.id}>
                    <div className="topbar">
                        <div className="username">{post.username}</div>
                        <div className="edit icon" onClick={() => {
                            handleEdit(post.id);
                            setButtonName("Edit and Buzz it!");
                        }}>
                            <img className="icon" src={edit} />
                        </div>
                        <div className="delete icon" onClick={() => handleDelete(post.id)}>
                            <img className="icon" src={bin} />
                        </div>
                    </div>
                    <div className="post-area">
                        <p>{post.body}</p>
                    </div>
                    <div className="like icon">
                        <img className="icon icon" src={like} onClick={handleLikeClick} />
                        <p className="count like-count">{countLike}</p>
                    </div>
                    <div className="love icon">
                        <img className="icon icon" src={love} onClick={handleLoveClick} />
                        <p className="count love-count">{countLove}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;