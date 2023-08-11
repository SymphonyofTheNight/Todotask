import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTaskLocally, edit_old_task } from '../redux/cartSlice.js'

import SubContainer from "./SubContainer"

const Container = () => {

    // dispatch
    const dispatch = useDispatch();

    // boolean
    const [ifEditing, setIfEditing] = useState(false); // boolean to show modal

    // edit task state
    const [edit_task, set_edit_task] = useState({ task: '', identifier: '' })
    const [get_selected_task_id, set_selected_task_id] = useState(); //identifier
    const [owner_id] = useState('64c488e22b8f90fbddf2e714')

    const selected_task = useSelector(state => {
        const outerArr = state.cart?.cart
        const innerArr = outerArr[0]?.list
        const getTask = innerArr?.find(task => get_selected_task_id ? task?.identifier === get_selected_task_id : null)
        return getTask
    })

    useEffect(() => {
        if (get_selected_task_id) {
            set_edit_task({
                task: selected_task.task,
            })
        }
    }, [get_selected_task_id])


    const editTaskHandler = (e) => {
        e.preventDefault();
        dispatch(edit_old_task({ mainID: owner_id, editedTask: edit_task }))
        dispatch(editTaskLocally({ mainID: owner_id, editedTask: edit_task }))
        setIfEditing(!ifEditing)
        set_selected_task_id('')
    }

    return (
        <div className="bg-[#1c1e21] relative h-screen w-screen grid items-center justify-center drop-shadow-md">
            <SubContainer setIfEditing={setIfEditing} set_selected_task_id={set_selected_task_id} />
            {ifEditing ?
                <div className='bg-[#1c1e21] h-auto w-[30vw] flex flex-row flex-wrap items-start justify-end top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[10px] task-editor'>
                    <h1 className='text-white text-1xl font-Poppins mt-5 ml-5 absolute left-0 top-0'>Edit task</h1>
                    <form onSubmit={editTaskHandler}>
                        <input onChange={(e) => {
                            set_edit_task({ ...edit_task, task: e.target.value, identifier: selected_task.identifier })
                        }} className='bg-[#01313d] h-[6vh] w-[27.5vw] mr-5 mt-[7vh] outline-0 border-[1px] border-white p-2 font-Poppins text-white' value={edit_task.task} />
                        <div className='h-[7vh] w-auto p-2 mb-[1vh] mt-[1vh] flex flex-row items-center justify-end'>
                            <button type='submit' className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[5vh] w-auto flex flex-row items-center pl-7 pr-7 gap-1'>
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className='h-[7vh] w-auto p-2 mb-[1vh] mt-[1vh] mr-3 flex flex-row items-center justify-end'>
                        <button type='submit' onClick={() => {
                            setIfEditing(!ifEditing)
                            set_selected_task_id('')
                        }} className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[5vh] w-auto flex flex-row items-center pl-7 pr-7 gap-1'>
                            Close
                        </button>
                    </div>
                </div>
                :
                <div className='absolute'>
                </div>
            }
        </div>
    )
}

export default Container



























































