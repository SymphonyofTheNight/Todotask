import React from 'react'

import Form from './ReusableComponent/Form';
import Tasklist from './Tasklist';

const SubContainer = () => {
    return (
        <div className='bg-[#01313d] h-[80vh] w-[50vw] rounded-[10px] text-justify flex flex-col flex-wrap'>
            <h1 className='text-white text-4xl font-Poppins mt-5 ml-5'>Get Things Done!</h1>
            <Form />
            <Tasklist />
        </div>
    )
}

export default SubContainer;