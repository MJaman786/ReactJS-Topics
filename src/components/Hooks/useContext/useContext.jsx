import { useContext } from 'react'
import { MyUserContext, userContext } from './userContext'

const DummyApp = () => {
    const data = useContext(userContext);

    return (
        <>
            <h1>{data.name}</h1>
            <h1>Age: {data.age}</h1>
            <h1>Course: {data.course}</h1>
        </>
    )
}

const UseContext = () => {
    return (
        <MyUserContext>
            <DummyApp />
        </MyUserContext>
    )
}

export default UseContext;
