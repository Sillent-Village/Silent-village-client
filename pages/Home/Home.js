import React, { useState } from "react";
import styles from "./Home.module.scss";
import className from "classnames/bind";
import totoroNPC from "../../assets/img/ttr.png";
import chatFrame from "../../assets/img/Characters.png";
import chatFrame2 from "../../assets/img/2.png";
import ReactPlayer from "react-player";
const cx = className.bind(styles);

const Home = () => {
  const [message, setMessage] = useState("");
  const handleTypeMessage = (e) => {
    setMessage(e.target.value);
  };
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Gk3R4nQk0NU&list=RDGk3R4nQk0NU&start_radio=1"
        playing={playing}
        volume={0.4}
      />
      <div>
        <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
};

export default Home;
