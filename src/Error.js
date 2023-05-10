import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
    <>
    <div className="Error-image">
        <img src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7891.jpg" alt="error"/>
        <button className="GoBack-Button"> <Link to ="/"> Go Back </Link> </button>
    </div>
    </>
    );
};


export default Error;