export const LOAD_POSTS_ITEM = 'LOAD_POSTS_ITEM';

export const loadPosts = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts'). then(async (posts) => {
            dispatch({
                type: LOAD_POSTS_ITEM,
                payload: await posts.json()
            });
        });
        
    }
}