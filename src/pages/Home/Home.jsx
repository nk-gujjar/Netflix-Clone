import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import List from "../../Components/list/List";
import "./Home.scss"

const Home = () => {
return(
    <div className="home">
        <Navbar/>
       <Featured type="movie"/>
       <List/>
       <List/>
       <List/>
       <List/>
       <List/>
    </div>
)
}
export default Home 