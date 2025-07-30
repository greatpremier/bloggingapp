import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Link to='/login'><button className="btn btn-primary">Login</button></Link>
            <Link to='/register'><button className="btn btn-primary">Register</button></Link>
        </div>
    )
}

export default Home;