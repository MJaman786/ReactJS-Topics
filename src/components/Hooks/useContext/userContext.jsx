import { createContext } from "react";

// creating user context
const userContext = createContext();

// creating a provider
const MyUserContext = ({children}) => {
    const userData = {
        name: "Aman",
        age: 23,
        course: "MERN"
    }

    return(
        <userContext.Provider value={userData}>
            {children}
        </userContext.Provider>
    )
}

export{
    userContext,
    MyUserContext
}