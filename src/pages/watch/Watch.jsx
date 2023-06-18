import {  ArrowBackOutlined } from "@material-ui/icons"
import "./Watch.scss"
import ReactPlayer from "react-player"
import { useRef } from "react";

export default function Watch(){
    const playerRef = useRef;
    return(
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>

                <span>Home</span>
            </div>
           {/* <video className="video" controls autoPlay src="https://youtu.be/DAqxAqq_jhg"/> */}
           <ReactPlayer ref={playerRef} className="video" url={'https://youtu.be/DAqxAqq_jhg'} controls={true} />
           
        </div>
    )
}