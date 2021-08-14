import "./featured.scss";
import {InfoOutlined, PlayArrow} from "@material-ui/icons";

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span> {type === "movie" ? "Movies" : "Series"} </span>
                    <select name="genre" id="genre">
                        <option> Genre </option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantacy">Fantacy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Wesetern</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://wegotthiscovered.com/wp-content/uploads/2019/03/Avengers-Engame-poster-cropped.jpg" alt="" />
            <div className="info">
                <img src="https://www.district-geek.fr/wp-content/uploads/2019/09/avengers-endgame-title-logo.jpg" alt="" />
                <br></br>
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex assumenda eaque doloremque non! Deleniti, minima. Rerum vero provident qui dolore labore libero, optio cumque ipsum enim dolorum ducimus accusantium.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
