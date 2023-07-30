import * as api from '../api/api.js'

export const get_db = () => async (dispatch) => {
    try {
        const { data } = await api.getDatabase();
        dispatch({ type: 'FETCH_DATA', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const post_task = (id, post_task) => async (dispatch) => {
    try {
        const { data } = await api.addTaskToList(id, post_task);
        dispatch({ type: 'POST_DATA', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const patch_task = (id, patch_task) => async (dispatch) => {
    try {
        const { data } = await api.editTaskToList(id, patch_task);
        dispatch({ type: 'EDIT_DATA', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const delete_task = (id, delete_id) => async (dispatch) => {
    try {
        const { data } = await api.removeTaskToList(id, delete_id);
        dispatch({ type: 'REMOVE_DATA', payload: data })
    } catch (error) {
        console.log(error)
    }
}