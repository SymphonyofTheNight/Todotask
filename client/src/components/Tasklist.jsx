import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { remove_task, removeTaskLocally } from '../redux/cartSlice.js'

const Tasklist = ({ setIfEditing, set_selected_task_id }) => {

    const dispatch = useDispatch();

    const [owner_id] = useState('64c488e22b8f90fbddf2e714')
    const [task_id, setTaskId] = useState();
    // const [getTask, setGetTask] = useState({ identifier: '', newTask: '' });

    const cart = useSelector(state => state.cart.cart)

    // handlers
    // const patchHandler = (e) => {
    //     e.preventDefault();
    //     console.log(getTask) //object
    //     // dispatch(edit_task({ mainID: owner_id, editedTask: getTask }))
    //     // dispatch(editTaskLocally({ mainID: owner_id, editedTask: getTask }))
    // }

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
            {cart &&
                Object.keys(cart).map(state => (
                    <div className='h-auto max-h-[60vh] w-[50vw] overflow-y-auto flex flex-row flex-wrap justify-center items-center mt-5 gap-4 mb-[8vh]' key={cart[state]._id}>
                        {cart[state]?.list &&
                            Object.keys(cart[state]?.list).map(task => (
                                <div className='bg-[#1c1e21] h-[6vh] w-[48vw] relative drop-shadow-md flex flex-row items-center justify-end' key={cart[state]?.list[task]?._id}>

                                    <span className='ml-5 text-white font-Poppins text-1xl absolute left-0'>{cart[state]?.list[task]?.task}</span>
                                    <button type='submit' onClick={() => {
                                        const taskId = cart[state]?.list[task];
                                        setIfEditing(state => !state) //show modal
                                        set_selected_task_id(taskId.identifier)
                                        // setGetTask({ ...getTask, newTask: cart[state]?.list[task]?.task, identifier: cart[state]?.list[task]?.identifier })
                                    }} className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                                        <FaEdit /> Edit
                                    </button>

                                    <form onSubmit={deleteHandler}>
                                        <button
                                            type='submit'
                                            onClick={() => {
                                                const taskId = cart[state]?.list[task];
                                                // console.log('Clicked task ID:', taskId);
                                                // console.log('Cart:', cart);
                                                // console.log('State:', state);
                                                // console.log('Task:', task);

                                                // const taskData = cart[state];
                                                // const taskList = taskData?.list;
                                                // const specificTask = taskList ? taskList[task]?.identifier : undefined;
                                                // console.log('Specific Task ID:', specificTask);
                                                setTaskId(taskId.identifier);
                                            }}
                                            className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'
                                        >
                                            <FaTrash /> Remove
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