import { useRef, useState } from "react"
import "./Register.scss"

export default function Register(){

    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const emailref=useRef()
    const passwordref=useRef()

    const handleemail =() =>{
        setemail(emailref.current.value)
    };
    const handlepassword =() =>{
        setpassword(passwordref.current.value)
    };

return(
    <div className="register">
        <div className="top">
            <img 
            className="logo"
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt=""
            />
            <button className="loginbutton"> Sign In</button>
        </div>
        <div className="container">
        <h1>Unlimited Movies,Tv Shows and more</h1>
        <h2>Watch Anywhere, Cancel anytime</h2>
        <p>Ready to Watch? Enter your Email to create your membership</p>
        {!email ? (
        <div className="input">
            <input type="email" placeholder="Email address" ref={emailref}/>
            <button className="enteremail" onClick={handleemail}> Get Started</button>

        </div>

        ):(
        <form className="input">
            <input type="password" placeholder=" Enter Password " ref={passwordref}/>
            <button className="enteremail" onClick={handlepassword}>Start</button>

        </form>
            
        )}
        </div>

    </div>
)

}