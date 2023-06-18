import "./Login.scss"

export default function Login(){

   

return(
    <div className="login">
        <div className="top">
            <img 
            className="logo"
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt=""
            />
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="Email" placeholder="Enter Email or Phone No"/>
                <input type="password" placeholder="Password"/>
                <button className="loginbutton"> Sign In</button>
                <span>New to Netflix?  <b>Sign Up now</b></span>
                <small>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <b>Learn More</b></small>
            </form>
        </div>

    </div>
)

}