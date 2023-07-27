import { useForm } from 'react-hook-form'
    ;
const Form = () => {

    const { handleSubmit, register } = useForm();

    const onSubmit = (input) => {
        console.log(input);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid place-items-center gap-4 mt-5'>
                <div className='h-[5vh] w-[48vw] flex flex-row flex-wrap justify-between'>
                    <input className='bg-[#01313d] h-[5vh] w-[38vw] outline-0 border-[1px] border-white p-2 font-Poppins text-white' placeholder='What do you have planned?' {...register("Task")} />
                    <button className='bg-[#1c1e21] h-[5vh] w-[9vw] font-Poppins text-white' type='submit'>
                        Submit
                    </button>
                </div>

            </div>
        </form>
    )
}

export default Form