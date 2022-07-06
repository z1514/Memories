import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';
import * as api from '../api';

//Action Creators
export const getPosts = () => async (dispath) => {
    try {
        const { data } = await api.fetchPosts();
        dispath({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }

}

export const createPost = (post) => async (dispath) => {
    try {
        const { data } = await api.createPost(post);

        dispath({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}