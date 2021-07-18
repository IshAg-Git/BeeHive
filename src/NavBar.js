import './index.css';
import { Link } from 'react-router-dom';
import img from './honeycomb.png'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="img"><img src={img} alt="" className="hive" /></div>
            <h1 className="title">BEEHIVE</h1>
            <div className="PageToggle">
                <div className="PageToggleSwitch">
                    <Link className="ToggleLink" to="/dashboard">Dashboard</Link>
                </div>
                <div className="PageToggleSwitch">
                    <Link to="/signin" className="ToggleLink">Sign In</Link>
                </div>
                <div className="PageToggleSwitch">
                    <Link className="ToggleLink" to="/">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
