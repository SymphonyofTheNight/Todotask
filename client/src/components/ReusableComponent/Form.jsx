import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTaskLocally, add_task } from '../../redux/cartSlice.js';

const Form = () => {

    const dispatch = useDispatch();

    const [task, setTask] = useState({
        task: '', identifier: uuidv4()
    })

    const [owner_id] = useState('64c488e22b8f90fbddf2e714');

    const onSubmit = (e) => {
        e.preventDefault();

        // set task and generatedid as one object
        dispatch(add_task({ mainID: owner_id, newTask: task }))
        dispatch(addTaskLocally({ mainID: owner_id, newTask: task }))
        // mainID, newTask

        setTask({ task: '', identifier: uuidv4() });

        // dispatch(removeAllTaskLocally({ mainID: owner_id })) //testing if works done
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='grid place-items-center gap-4 mt-5'>
                <div className='h-[5vh] w-[48vw] flex flex-row flex-wrap justify-between'>
                    <input onChange={(e) => {
                        setTask({ ...task, task: e.target.value })
                    }} className='bg-[#01313d] h-[5vh] w-[38vw] outline-0 border-[1px] border-white p-2 font-Poppins text-white' placeholder='What do you have planned?' value={task.task} />
                    <button className='bg-[#1c1e21] h-[5vh] w-[9vw] font-Poppins text-white' type='submit'>
                        Submit
                    </button>
                </div>

            </div>
        </form>
    )
}

export default Form