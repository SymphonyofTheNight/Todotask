import * as api from '../api/api.js'

export const get_db = () => async (dispatch) => {
    try {
        const { data } = await api.getDatabase();
        dispatch({ type: 'FETCH_DATA', payload: data })
    } catch (error) {
        console.log(error)
    }
}