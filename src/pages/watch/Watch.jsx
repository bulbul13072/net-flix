import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://cdn.videvo.net/videvo_files/video/premium/getty_12/large_watermarked/istock-699878140_preview.mp4"
      />
    </div>
  );
}