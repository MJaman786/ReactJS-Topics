import { useParams } from "react-router-dom";
import { getDetails } from "../api/api";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";

export default function PostDetails() {

    const { id } = useParams();
    const getPostsDetails = async () => {
        try {
            const response = await getDetails(id);
            if (response.status !== 200) {
                console.log("SERVER ERROR");
            } else {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ["Post", id],
        queryFn: getPostsDetails
    })

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return (
        <>
            <div className="container p-8">
                <Card
                    userId={data.userId}
                    id={data.id}
                    title={data.title}
                    body={data.body}
                    btnName = 'Go Back'
                    btnNav = '/fetchold'
                />
            </div>
        </>
    )
}