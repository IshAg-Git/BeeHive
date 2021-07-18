
import './index.css';
import img from './bee.png';

const Home = () => {
    function ClickSubmit() {
        var firstpass = document.formBox.password.value;
        var secondpass = document.formBox.confirmPass.value;
        var phone = document.formBox.phone.value;
        var a;
        var b;

        if (firstpass !== secondpass) {
            alert("Password must be same!");
        }
        else {
            b = 1;
        }
        if (/^\d{10}$/.test(phone)) {
            a = 1;
        }
        else {
            alert("Enter valid number!");
        }

        if (a === 1 && b === 1) {
            alert("Account has been created successfully")
        }
    }
    return (
        <div className="FormContainer">
            <p className="head">Join The Hive!</p>
            <form name="formBox" onSubmit="return ClickSubmit()">
                <label htmlFor="name" className="FormLabel">Full Name: </label><br />
                <input required type="text" id="name" className="FormInput" placeholder="Enter Your Full Name" name="name" /><br />
                <label htmlFor="email" className="FormLabel">Email Address: </label><br />
                <input required type="email" id="email" className="FormInput" placeholder="Enter Your Email Id" name="email" /><br />
                <label htmlFor="phone" className="FormLabel">Phone Number: </label><br />
                <input required type="text" id="phone" className="FormInput" placeholder="Enter Your Phone Number" name="phone" /><br />
                <label htmlFor="password" className="FormLabel">Password: </label><br />
                <input required type="password" id="password" className="FormInput" placeholder="Enter Password" name="password" /><br />
                <label htmlFor="confirm-password" className="FormLabel">Confirm Password: </label><br />
                <input required type="password" id="confirm-password" className="FormInput" placeholder="Enter Password" name="confirmPass" /><br />
                <button className="submit" onClick={ClickSubmit}>Become a <img src={img} alt="" className="bee" /></button>
            </form>
        </div>
    );
}

export default Home;
