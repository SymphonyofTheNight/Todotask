import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useForm } from 'react-hook-form';

// controllers
import { post_task, patch_task, delete_task } from '../controller/action.js'

const Tasklist = () => {

    // request container
    const { handleSubmit, PatchTask, DeleteTask } = useForm();

    // dispatch thunk
    const dispatch = useDispatch();

    // get data from store 
    const tasklist = useSelector(state => state.reducer.store);

    // handlers
    const patchHandler = (e) => {
        e.preventDefault();
    }

    const deleteHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            {tasklist && Object.keys(tasklist).map(state => {
                return (
                    <div className='h-auto max-h-[60vh] w-[50vw] overflow-y-auto flex flex-row flex-wrap justify-center items-center mt-5 gap-4' key={tasklist[state]._id}>
                        {tasklist[state].list && Object.keys(tasklist[state].list).map(task => {
                            return (
                                <div className='bg-[#1c1e21] h-[6vh] w-[48vw] relative drop-shadow-md flex flex-row items-center justify-end' key={tasklist[state].list[task]._id}>
                                    <span className='ml-5 text-white font-Poppins text-1xl absolute left-0'>{tasklist[state].list[task].task}</span>
                                    <form onSubmit={handleSubmit(patchHandler)}>
                                        <button type='submit' className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                                            <FaEdit /> Edit
                                        </button>
                                    </form>
                                    <button className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                                        <FaTrash /> Remove
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )
            })}

        </div>
    )
}

export default Tasklist