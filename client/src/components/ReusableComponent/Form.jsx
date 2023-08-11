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
        if (task.task !== '') {
            dispatch(add_task({ mainID: owner_id, newTask: task }))
            dispatch(addTaskLocally({ mainID: owner_id, newTask: task }))
            setTask({ task: '', identifier: uuidv4() });
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <div className='w-[80vw] lg:w-[450px] grid place-items-center gap-4 mt-4'>
                <div className='h-auto w-auto flex flex-row flex-wrap '>
                    <input onChange={(e) => {
                        setTask({ ...task, task: e.target.value })
                    }} className='bg-[#01313d] h-[7vh] w-[80vw] lg:w-[450px] outline-0 border-[1px] border-white p-2 font-Poppins text-white' placeholder='What do you have planned?' value={task.task} />
                    <button className='bg-[#1c1e21] h-[5vh] w-[80vw] lg:w-[450px] font-Poppins text-white pr-2 pl-2 mt-2' type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form