import React, { useEffect, useState } from 'react';
import '../../styles/Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ReactPlayer from 'react-player';
const Home = () => {
  const [configuration, setConfiguration] = useState({trailers: 'https://www.youtube.com/watch?v=LfRpKRuH0v0&ab_channel=TrailersInSpanish'});



  return (
    <div>
      <div className='title-home'>
        PROXIMAMENTE
      </div>
      <ReactPlayer
        url={configuration.trailers}
        className='react-player'
        playing
        width='100%'
        height='600px'
        controls={true}
      />
    </div>
  )
}

export default Home;
