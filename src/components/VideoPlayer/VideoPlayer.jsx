import React, { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/CC_Mision-0725H-Final.mp4'



const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }
/* Si el video es cerrado con el sonido activado, se desactiva y cierra*/
  useEffect(() => {
    if (!playState && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optional: Reset video to the start
    }
  }, [playState]);

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video ref={videoRef} src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
