import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Video from './components/Video';
import VIDEOS from './utils/videoSrc';

function App() {
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = newVideo => {
    setSrc(VIDEOS[newVideo]);
  }


  return (
    <div>
      <h1>Video Player</h1>
      <Video src={src} />
      <Menu onSelectVideo={onSelectVideoHandler} />
    </div>
  );
}

export default App;
