import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { remove_task, removeTaskLocally } from '../redux/cartSlice.js'

const Tasklist = () => {

    const dispatch = useDispatch();

    const [owner_id] = useState('64c488e22b8f90fbddf2e714')
    const [task_id, setGetid] = useState()

    const cart = useSelector(state => state.cart.cart)

    // request container
    const { handleSubmit } = useForm()

    // handlers
    const patchHandler = (e) => {
        e.preventDefault();
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        console.log(owner_id, task_id)

        if (owner_id && task_id !== undefined) {
            dispatch(remove_task({ mainID: owner_id, taskID: task_id }))
            dispatch(removeTaskLocally({ mainID: owner_id, taskID: task_id }))
        }
        // task_id gets undefined when try to remove 1 item while there are other task then if refresh everything works fine

    }

    return (
        <div>
            {cart && Object.keys(cart).map(state => {
                return (
                    <div className='h-auto max-h-[60vh] w-[50vw] overflow-y-auto flex flex-row flex-wrap justify-center items-center mt-5 gap-4' key={cart[state]._id}>
                        {cart[state].list && Object.keys(cart[state].list).map(task => {
                            return (
                                <div className='bg-[#1c1e21] h-[6vh] w-[48vw] relative drop-shadow-md flex flex-row items-center justify-end' key={cart[state].list[task]._id}>
                                    <span className='ml-5 text-white font-Poppins text-1xl absolute left-0'>{cart[state].list[task].task}</span>
                                    <form onSubmit={handleSubmit(patchHandler)}>
                                        <button type='submit' className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                                            <FaEdit /> Edit
                                        </button>
                                    </form>
                                    <form onSubmit={deleteHandler}>
                                        <button type='submit' onClick={() => {
                                            setGetid(cart[state]?.list[task]?._id)
                                        }} className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                                            <FaTrash /> Remove
                                        </button>
                                    </form>
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