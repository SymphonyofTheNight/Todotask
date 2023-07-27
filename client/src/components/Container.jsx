import { useSelector } from 'react-redux'
import SubContainer from "./SubContainer"

const Container = () => {

    const FETCH_STORE = useSelector(state => state.reducer.store);

    console.log(FETCH_STORE);

    return (
        <div className="bg-[#1c1e21] h-screen w-screen grid items-center justify-center drop-shadow-md">
            <SubContainer />
        </div>
    )
}

export default Container