import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";

import "./MusicPlayer.css";

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playMusic() {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Music play error:", err);
        });
      }
    },

    pauseMusic() {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    },
  }));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source
        src={`${import.meta.env.BASE_URL}music/wedding.mp3`}
        type="audio/mpeg"
      />

      Your browser does not support the audio element.
    </audio>
  );
});

export default MusicPlayer;