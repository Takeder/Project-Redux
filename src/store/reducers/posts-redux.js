import { LOAD_POSTS_ITEM } from '../actions/posts-redux-actions';

export const postsReduxReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_POSTS_ITEM:
            return [...action.payload];
        default:
            return state;
    }
    
}