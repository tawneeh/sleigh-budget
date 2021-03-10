import React, { useState, useEffect } from 'react';
//import Chart from 'chart.js';
import firebase from './../firebase';
//import * as data from './gift.json'; (only if using JSON Object file)

function Graph() {

  const [gifts, setGifts] = useState([]);
  const fetchGifts = async() => {
    const response = firebase.collection('gifts');
    const data = await response.get();
    data.docs.forEach(item => {
      setGifts([...gifts, item.data()])
    })
  }

  useEffect(() => {
    fetchGifts();
  }, [])

  return (
    <>
      {
        gifts && gifts.map(gift => {
          return (
          <>
            <h1>{gift.dollarAmount}</h1>
            {/* <canvas id="giftTotal" width="100" height="100" /> */}
          </>
          )
        })
      }
    </>
  );
}

export default Graph;