import { useEffect, useState } from "react";
import Card from "./card";

const Api = () => {
    const [data, setData] = useState(null);
    async function fetchData() {
        try {
            const request = await fetch('https://jsonplaceholder.typicode.com/posts');
            let result = await request.json();
            result = result.slice(0,10);
            setData(result);
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
            {
                (data && data.length > 0) ? 
                    data.map((value, index) => (
                        <Card data={value} index={index}/>
                    ))
                    : (
                    <div className="spinner-border text-primary"></div>
                )
            }
        </div>
    );


    return (
        <>
            {
                (data && data.length > 0)
                    ? data.map((value) => (
                        <Card data={value} />
                    ))
                    : null
            }
        </>
    );
}

export default Api;