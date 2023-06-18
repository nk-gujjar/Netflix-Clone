import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss"

 function Featured ({type}) {
    return(
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies":"Web Series"}
                    </span>
                    <select name="genre" id="genre">
                        <option > Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Crime">Crime</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                        <option value="Animation">Animation</option>
                        <option value="Drama">Drama</option>
                        <option value="Historical">Historical</option>
                        <option value="Roamance">Roamance</option>
                        <option value="Documentary">Documentary</option>
                      
                    </select>
                </div>
            )}
              <img 
                 src="https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg"
                 alt="" /> 
                 <div className="info">
                <img src="https://www.dafont.com/forum/attach/orig/8/2/820803.png" alt="" />
                 <span className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Aliquam temporibus sapiente libero itaque delectus. Corporis modi molestias deserunt
                  similique voluptates enim ea fugit doloribus placeat sequi a commodi, fuga voluptate.
                  </span>
                 <div className="button">
                    <button className="play" >
                        
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                 </div></div>
        </div>

    )
}
export default Featured;