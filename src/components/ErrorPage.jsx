import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center flex-col my-20 gap-5">
            <h2 className="text-3xl font-bold">Oops!!!</h2>
            <h4 className="text-2xl font-semibold">Page Not Found</h4>
            <Link to={'/'}><button className="btn-primary btn">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;