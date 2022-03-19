import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { loadPosts } from '../store/actions/posts-redux-actions';

function PostsRedux () {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    return (
        <ul>
            {posts.map(item => (
                <li key={item.id}>
                    <b>{item.title}</b>
                    <p>{item.body}</p>
                </li>
            ))}
        </ul>
    )
}

export default PostsRedux;