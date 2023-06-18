import {  ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
 import { useState } from "react";

const Navbar = () => {
    const [isScroll,setScroll] = useState(false);
    window.onscroll = () =>{
        setScroll(window.pageYOffset ===0 ? false:true);
        return () =>(window.onscroll=null);
    };
    // console.log(isScroll);
    return(
        <div className={isScroll?"navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                    alt=""
                    />
                    <span>Movies</span>
                    <span>Web series</span>
                    <span>My List</span>
                    <span>Kids</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <Notifications className="icon"/>
                    <img src="data:image/png;base64,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" alt="" />
                    <div className="profile">

                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>setting</span>
                        <span>Log out</span>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Navbar