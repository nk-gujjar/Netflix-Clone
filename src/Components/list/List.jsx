import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./List.scss"
import Listitem from "../Listitem/Listitem"
import { useRef, useState } from "react"

export default function List (){
    const listref=useRef()
    const[ismoved,setismoved]=useState(false)
    const[slideno,setslideno]= useState(0)
    const handle=(direction) =>{

        let distance=listref.current.getBoundingClientRect().x -55
        if(direction === "left" && slideno>0){
            setslideno(slideno-1)
            listref.current.style.transform=`translateX(${240+distance}px)`
        }
        if(direction === "right" && slideno<6 ){
            setismoved(true)
            setslideno(slideno+1)
            listref.current.style.transform=`translateX(${-230+distance}px)`
        }
    }
    return(
        <div className="list">
            <span className="listTitle"> Continue to watch</span>
            <div className="wrapper">

            <ArrowBackIosOutlined className="Slider left"
             onClick={()=>handle("left")} 
             style={{display: !ismoved && "none"}}
             />
                
            <div className="container" ref={listref}>
                <Listitem index={0}/>
                <Listitem index={1}/>
                <Listitem index={2}/>
                <Listitem index={3}/>
                <Listitem index={4}/>
                <Listitem index={5}/>
                <Listitem index={6}/>
                <Listitem index={7}/>
                <Listitem index={8}/>
                <Listitem index={9}/>
                <Listitem index={10}/>
            </div>

            <ArrowForwardIosOutlined className="Slider right" onClick={()=>handle("right")}/>
            </div>

        </div>
    )
}