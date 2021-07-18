
import './index.css';

const SignIn = () => {
    return (
        <div className="FormContainer">
            <p className="head">Welcome Back Bee :)</p>
            <form>
                <label htmlFor="email" className="FormLabel">Email Address: </label><br />
                <input required type="email" id="email" className="FormInput" placeholder="Enter Your Email Id" name="email" /><br />
                <label htmlFor="password" className="FormLabel">Password: </label><br />
                <input required type="password" id="password" className="FormInput" placeholder="Enter Password" name="password" /><br />
                <button className="submit" onClick={() => alert('Sign-In Successfull')} >Enter Your Hive!</button>
            </form>
        </div >
    );
}

export default SignIn;
