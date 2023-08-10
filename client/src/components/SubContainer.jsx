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
        <div className='bg-[#01313d] min-h-[80vh] w-[50vw] relative rounded-[10px] text-justify flex flex-col flex-wrap'>
            <h1 className='text-white text-4xl font-Poppins mt-5 ml-5'>Get Things Done!</h1>
            <Form />
            <Tasklist setIfEditing={setIfEditing} set_selected_task_id={set_selected_task_id} />
            <form onSubmit={HandleDeleteAll}>
                <button type='submit' className='bg-[#1c1e21] h-[5vh] w-[9vw] absolute right-0 bottom-0 m-5 font-Poppins text-white'>
                    REMOVE ALL
                </button>
            </form>

        </div>
    )
}

export default SubContainer;