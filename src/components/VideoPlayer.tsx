import { type FC } from 'react';
import dynamic from 'next/dynamic';

import sampleContents from '../data/sampleContents.json';

const GreenVideoPlayer = dynamic(() => import('./VideoPlayerLoader'), { ssr: false });

export const VideoPlayer: FC = () => {
  const onEvent = (e: CustomEvent) => {
    switch (e.detail.type) {
      case 'impression': {
        console.log('impression!');
        break;
      }
      case 'ms_25': {
        alert('25% milestone reached!');
        break;
      }
      default: {
        console.log(e.detail.type);
      }
    }
  };

  // example: providing contents and templateData options statically, subscribing to player events
  return (
    <div style={{ width: '640px' }}>
      <GreenVideoPlayer
        licenseKey="be132c877a4e0d3cf874074f4d9bdf7885c611a1"
        config={{
          templateData: {
            playerAspect: '16:9',
            embedBorderRadius: '5px',
            autostartDelay: 0,
            endCardChooser: 'GRID',
            nextVideoAutoplay: true,
            endCardCountdown: 5,
          },
          contents: [
            sampleContents[0],
            sampleContents[1],
            sampleContents[0],
            sampleContents[1],
            sampleContents[0],
            sampleContents[1],
          ],
        }}
        onEvent={onEvent}
      />
    </div>
  );
};
