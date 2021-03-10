import React, { useEffect } from 'react';
import Chart from 'chart.js';

function Graph(props) {

  console.log(props, "graph line 6"); // passing down gift object - object within an object
  console.log(props.dollarAmount); // undefined

  // const total = gifts.map((gift) => {
  //   // loop through gifts and add all of the dollarAmount properties together
  //   // gift.dollarAmount 
  // })

  const total = Object.entries(props) {
    
  }

  useEffect(() => {
    const ctx = document.getElementById("giftTotal");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Saved", "Gift List Total"],
        datasets: [
          {
            label: "Dollar Bills",
            data: [10, 50, 0], // can hard code a dollarAmount in GiftList to pass down if needed
            backgroundColor: [
              "Red",
              "Green"
            ],
            borderColor: ["Red", "Green"],
            borderWidth: 1
          }
        ]
      }
    });
  });

  return (
    <>
      <canvas id="giftTotal" width="40" height="40" />
      <h3>{props.dollarAmount}</h3>
    </>
  );
}

export default Graph;