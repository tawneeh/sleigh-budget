import React, { useEffect } from 'react';
import Chart from 'chart.js';

function Graph(props) {

  console.log(props, "graph line 6"); // passing down the whole gift object (i think object)
  console.log(props.dollarAmount); // undefined

  useEffect(() => {
    const ctx = document.getElementById("giftTotal");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Saved", "Needed"],
        datasets: [
          {
            label: "Dollar Bills",
            data: [10, props.dollarAmount, 0], // can hard code a dollaAmount in GiftList to pass down if needed
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