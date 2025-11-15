const Card = ({data, index}) => {
    return (
        <>
            <div className="card shadow-lg p-3" style={{ width: "100%", maxWidth:"600px", borderRadius: "18px" }}>
                <div className="card-body">
                    <h4 className="card-title text-primary fw-bold mb-3">{index}. Post Details</h4>
                    
                    <h6 className="fw-bold">Title:</h6>
                    <p className="text-secondary">{data.title}</p>

                    <h6 className="fw-bold">Body:</h6>
                    <p className="text-secondary">{data.body}</p>

                    <button className="btn btn-dark w-100 mt-3">
                        Read More
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;