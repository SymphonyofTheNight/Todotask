import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/api.js'

export const get_data = createAsyncThunk('cart/fetchData',
    async (arg, { rejectWithValue }) => {
        try {
            const { data } = await api.getDatabase();
            return data;
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    }
);

export const remove_task = createAsyncThunk('cart/remove_task',
    async ({ mainID, taskID }, { rejectWithValue }) => {
        try {
            await api.removeTaskById(mainID, taskID)
        } catch (error) {
            rejectWithValue(error.ressponses.data)
        }
    }
)

export const remove_all_task = createAsyncThunk('cart/remove_all',
    async ({ mainID }, { rejectWithValue }) => {
        try {
            await api.removeAllTaskById(mainID)
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    }
)

export const add_task = createAsyncThunk('cart/add_task',
    async ({ mainID, newTask }, { rejectWithValue }) => {
        try {
            const { data } = await api.addTaskToList(mainID, newTask)
            return data;
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    }
)

export const edit_old_task = createAsyncThunk('cart/edit_task',
    async ({ mainID, editedTask }, { rejectWithValue }) => {
        try {
            const { data } = await api.editTaskToList(mainID, editedTask)
            return data;
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    }
)

const initialState = {
    cart: [],
    isLoading: false,
    isSuccess: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTaskLocally: (state, action) => {
            const { mainID, newTask } = action.payload;
            const updatedCart = state.cart.map(item => {
                if (item._id === mainID) {
                    const updatedList = [...item.list, newTask]; // spread operator in array when ur adding new object in array
                    return { ...item, list: updatedList };
                }
                return item;
            });
            state.cart = updatedCart;
        },
        editTaskLocally: (state, action) => {

            const { mainID, editedTask } = action.payload

            const updatedTask = state.cart.map(state => {
                if (state._id === mainID) {
                    const updatedList = state.list.map(task => {
                        if (task.identifier === editedTask.identifier) {
                            return { ...task, ...editedTask }
                        }
                        return task
                    })
                    return { ...state, list: updatedList }
                }
                return state
            })

            state.cart = updatedTask

            // state.cart = updatedTask

            // const { mainID, editedTask } = action.payload
            // const updatedTask = state.cart.map(state => {
            //     if (state._id === mainID) {
            //         const updateList = state.list.map(task => {
            //             if (task.identifier === editedTask.identifier) {
            //                 return { ...task, ...editedTask }  // spread operator in object or curly braces as when ur updating a existing object 
            //             }
            //             return task
            //         })
            //         return { ...state, list: updateList }
            //     }
            //     return state
            // })
            // state.cart = updatedTask
        },
        removeTaskLocally: (state, action) => {
            const { mainID, taskID } = action.payload;
            const updatedCart = state.cart.map(item => {
                if (item._id === mainID) {
                    const updatedList = item.list.filter(task => task.identifier !== taskID); //filtering out specific task then return it 
                    return { ...item, list: updatedList }; // returning the updated list that has been inside of item as an object with array that has been filtered
                }
                return item;
            });
            state.cart = updatedCart;
        },
        removeAllTaskLocally: (state, action) => {
            const { mainID } = action.payload
            const updatedMainArr = state.cart.map(mainArr => {
                if (mainArr._id === mainID) {
                    return { ...mainArr, list: [] }
                }
            })
            state.cart = updatedMainArr
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_data.pending, (state) => {
                state.isLoading = true
            })
            .addCase(get_data.fulfilled, (state, action) => {
                state.isLoading = false
                state.cart = action.payload
                state.isSuccess = true
            })
            .addCase(get_data.rejected, (state) => {
                state.loading = false
                state.isSuccess = true
            })
            .addCase(add_task.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(add_task.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
    },
})

export const { removeTaskLocally, addTaskLocally, removeAllTaskLocally, editTaskLocally } = cartSlice.actions

export default cartSlice.reducer