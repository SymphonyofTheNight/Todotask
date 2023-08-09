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
                    const updatedList = [...item.list, newTask];
                    return { ...item, list: updatedList };
                }
                return item;
            });
            state.cart = updatedCart;
        },
        removeTaskLocally: (state, action) => {
            const { mainID, taskID } = action.payload;
            const updatedCart = state.cart.map(item => {
                if (item._id === mainID) {
                    const updatedList = item.list.filter(task => task._id !== taskID);
                    return { ...item, list: updatedList };
                }
                return item;
            });
            state.cart = updatedCart;
        },
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
            })
            .addCase(add_task.fulfilled, (state, action) => {
                const { mainID, newTask } = action.payload;
                const updatedCart = state.cart.map(item => {
                    if (item._id === mainID) {
                        const updatedList = [...item.list, newTask];
                        return { ...item, list: updatedList };
                    }
                    return item;
                });
                state.cart = updatedCart;
                state.isLoading = false
                state.isSuccess = true
            })
    },
})

export const { removeTaskLocally, addTaskLocally } = cartSlice.actions

export default cartSlice.reducer