import Card from "./components/card";

export default function Props() {
    let userObj = {
        name: "Aman",
        age: 23,
        course: "MERN",
    }
    return(
        <>
            <Card user={userObj}/>
        </>
    );
}

