import React from 'react';
import ImageSlider from './components/ImageSlider';
import './App.css';
import { SliderData } from './components/SliderData';
import YoutubeEmbed from './components/YoutubeEmbed';

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData}/>
      <YoutubeEmbed embedId="rokGy0huYEA"/>
    </div>
  );
}

export default App;
