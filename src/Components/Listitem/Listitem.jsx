import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./Listitem.scss"
import { useState } from "react"

export default function Listitem ({index}) {
    const[ishovered,setishovered]=useState(false)
    const trailer="https://youtu.be/DAqxAqq_jhg"
    return(
        <div className="Listitem"
        style={{left: ishovered && index*225  +index*5,transition:{delay:1000 } }}
        
         onMouseEnter={()=>setishovered(true)}
         onMouseLeave={()=>setishovered(false)}
         >
            <img src="https://assets1.ignimgs.com/2019/06/04/stposter-1-1559670838860.jpg?crop=16%3A9&width=888&dpr=2" 
            alt=""
             />
             {ishovered && (
                <>
                <video autoPlay={true} loop src={trailer} 
                />
                 <div className="info">
                <div className="buttons">
                    <PlayArrow className="but"/>
                    <Add className="but"/>
                    <ThumbUpAltOutlined className="but"/>
                    <ThumbDownAltOutlined className="but"/>
                </div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit illum laboriosam labore earum odit eaque repellat animi quibusdam, neque corrupti, vitae nemo, eius ea! Dolore quas hic perferendis quam.</span>
             </div>

             </>
        )}
        </div>
    )
}