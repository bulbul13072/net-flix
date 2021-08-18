import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"

export const ListItem = () => {
    return (
        <div className="listItem">
            <img src="https://www.catholicnews.com/wp-content/uploads/custom/20210623T1100-MOVIE-REVIEW-F9-FAST-SAGA-1250672.jpg" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
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
        </div>
    )
}
