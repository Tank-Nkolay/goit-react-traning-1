import { useRef } from 'react';
import { Container } from './Hooks.styled';

const HooksPlayer = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <Container>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </Container>
  );
};

export default HooksPlayer;

import { useRef } from 'react';
