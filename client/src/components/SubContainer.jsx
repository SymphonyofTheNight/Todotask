// import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { removeAllTaskLocally, remove_all_task } from '../redux/cartSlice.js'
import Form from './ReusableComponent/Form';
import Tasklist from './Tasklist';

const SubContainer = ({ setIfEditing, set_selected_task_id }) => {

    const dispatch = useDispatch();

    const [owner_id] = useState('64c488e22b8f90fbddf2e714')

    const HandleDeleteAll = (e) => {
        e.preventDefault();
        dispatch(remove_all_task({ mainID: owner_id }))
        dispatch(removeAllTaskLocally({ mainID: owner_id }))
    }

    return (
        <div className='bg-[#01313d] min-h-[70vh] w-[90vw] lg:w-[500px] relative rounded-[10px] text-justify flex flex-col flex-wrap items-center justify-center'>
            <h1 className='text-white text-1xl font-Poppins mt-5'>Get Things Done!</h1>
            <Form />
            <Tasklist setIfEditing={setIfEditing} set_selected_task_id={set_selected_task_id} />
            <form onSubmit={HandleDeleteAll}>
                <button type='submit' className='bg-[#1c1e21] h-[5vh] w-[80vw] lg:w-[450px] mb-4 font-Poppins text-white'>
                    REMOVE ALL
                </button>
            </form>
        </div>
    )
}

export default SubContainer;