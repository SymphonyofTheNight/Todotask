import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { remove_task, removeTaskLocally } from '../redux/cartSlice.js'

const Tasklist = ({ setIfEditing, set_selected_task_id }) => {

    const dispatch = useDispatch();

    const [owner_id] = useState('64c488e22b8f90fbddf2e714')
    const [task_id, setTaskId] = useState();

    const cart = useSelector(state => state.cart.cart)

    const deleteHandler = (e) => {
        e.preventDefault();
        console.log(owner_id, task_id)

        if (owner_id && task_id !== undefined) {
            dispatch(remove_task({ mainID: owner_id, taskID: task_id }))
            dispatch(removeTaskLocally({ mainID: owner_id, taskID: task_id }))
        }
    }

    return (
        <div>
            {cart &&
                Object.keys(cart).map(state => (
                    <div className='max-h-[40vh] min-h-[40vh] w-[80vw] lg:w-[450px] mt-5 mb-[20px] overflow-y-auto overflow-x-hidden' key={cart[state]._id}>
                        {cart[state]?.list &&
                            Object.keys(cart[state]?.list).map(task => (
                                <div className='bg-[#1c1e21] h-[7vh] w-[80vw] lg:w-[450px] relative drop-shadow-md flex flex-row items-center justify-end mb-2' key={cart[state]?.list[task]?._id}>
                                    <span className='ml-5 text-white font-Poppins text-1xl absolute left-0'>{cart[state]?.list[task]?.task}</span>
                                    <button type='submit' onClick={() => {
                                        const taskId = cart[state]?.list[task];
                                        setIfEditing(state => !state)
                                        set_selected_task_id(taskId.identifier)
                                    }} className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                                        <FaEdit />
                                    </button>

                                    <form onSubmit={deleteHandler}>
                                        <button
                                            type='submit'
                                            onClick={() => {
                                                const taskId = cart[state]?.list[task];
                                                setTaskId(taskId.identifier);
                                            }}
                                            className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'
                                        >
                                            <FaTrash />
                                        </button>
                                    </form>

                                </div>
                            ))}
                    </div>
                ))}
        </div>
    )
}

export default Tasklist