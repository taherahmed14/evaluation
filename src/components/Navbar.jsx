import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <Link className="buttons" to={"/userLogin"}>Login as User</Link>
                <Link className="buttons" to={"/adminLogin"}>Login as Admin</Link>
            </div>
        </div>
    )
}