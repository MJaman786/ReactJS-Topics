const Card = (props) => {
    let user = props.user
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">

                <div
                    className="card shadow-lg p-4"
                    style={{ maxWidth: "400px", width: "100%", borderRadius: "18px" }}>

                    {/* Title */}
                    <h2 className="text-center mb-4 fw-bold text-primary">
                        Student Details
                    </h2>

                    {/* Content */}
                    <div className="mb-3">
                        <h5 className="fw-semibold text-secondary mb-1">Name</h5>
                        <p className="fs-5">{user.name}</p>
                    </div>

                    <div className="mb-3">
                        <h5 className="fw-semibold text-secondary mb-1">Age</h5>
                        <p className="fs-5">{user.age}</p>
                    </div>

                    <div className="mb-3">
                        <h5 className="fw-semibold text-secondary mb-1">Course</h5>
                        <p className="fs-5">{user.course}</p>
                    </div>

                    {/* Button */}
                    <button className="btn btn-primary w-100 mt-3 fw-semibold py-2">
                        View Profile
                    </button>
                </div>

            </div>
        </>
    );
};

export default Card;
