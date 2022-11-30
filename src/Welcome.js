import { Link, useNavigate, useParams } from "react-router-dom";

export default function Welcome (props) {
    const navigate = useNavigate ();
    const { name = 'World' } = useParams ();
    const toLogin = () => {
        navigate ('/login');
    }
    return (
            <div className="welcome">
                <p>Hello, {name} </p>
                <Link to="/login">Login to the App</Link>
                <button onClick={toLogin}>Enter the app</button>
            </div>
        )
}