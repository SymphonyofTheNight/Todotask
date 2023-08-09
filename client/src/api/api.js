import axios from 'axios'

const base_api = axios.create({ baseURL: 'http://localhost:5000/' });

export const getDatabase = () => base_api.get('/');

export const addTaskToList = (id, post_task) => base_api.post(`/${id}`, {
    list: [
        {
            identifier: post_task.identifier,
            task: post_task.task
        }
    ]
});

export const editTaskToList = (id, patch_task) => base_api.patch(`/${id}`, {
    list: [
        {
            identifier: patch_task.identifier,
            task: patch_task.task
        }
    ]
});

export const removeTaskById = (mainID, taskID) => base_api.put(`/${mainID}`, {
    list: [
        {
            _id: taskID
        }
    ]
}) 