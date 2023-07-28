// import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const Tasklist = () => {
    return (
        <div className='h-auto max-h-[60vh] w-[50vw] overflow-y-auto flex flex-row flex-wrap justify-center items-center mt-5 gap-4'>
            <div className='bg-[#1c1e21] h-[6vh] w-[48vw] relative drop-shadow-md flex flex-row items-center justify-end'>
                <span className='ml-5 text-white font-Poppins text-1xl absolute left-0'>Chores</span>
                <button className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                    <FaEdit /> Edit
                </button>
                <button className='bg-[#01313d] text-md font-Poppins text-white drop-shadow-md h-[4vh] w-auto flex flex-row items-center pl-3 pr-3 mr-2 gap-1'>
                    <FaTrash /> Remove
                </button>
            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
            <div className='bg-[#1c1e21] h-[7vh] w-[48vw] drop-shadow-md'>

            </div>
        </div>
    )
}

export default Tasklist