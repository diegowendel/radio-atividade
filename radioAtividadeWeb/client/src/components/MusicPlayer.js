import React from 'react';

const MusicPlayer = () => {
  return (
    <div style={{display: 'inline-block'}}>
      <audio
        src="http://localhost:5000/audio/"
        controls/>
    </div>
  );
};

export default MusicPlayer;
