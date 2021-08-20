import { Add,
    PlayArrow,
    ThumbDownAltOutlined,
    ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({index}){
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className="listItem"
            style = {{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <img
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fletsdownloadgame.com%2Fwp-content%2Fuploads%2F2019%2F12%2FDownload-marvels-avengers-game-apk-for-android-free.jpg&f=1&nofb=1"
        alt=""
                />
            {isHovered && (
                <>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 12 mins</span>
                    <span className="limit">+15</span>
                    <span>1999</span>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque pe!
                </div>
                <div className="genre">
                    Action
                </div>
            </div>
            </>
            )}
        </div>
    );
}
