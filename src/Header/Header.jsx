import { Link ,NavLink} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>

                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link> */}

                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
            </nav>
        </div>
    );
};

export default Header;