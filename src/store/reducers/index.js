import { combineReducers } from 'redux';

import { postsReduxReducer } from './posts-redux';

export const reducers = combineReducers({
    posts: postsReduxReducer
})