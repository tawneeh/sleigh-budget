import React, { useEffect } from 'react';
import Chart from 'chart.js';

function Graph(props) {

  console.log(props); // passing down gift object - object within an object
  console.log(props[0].dollarAmount);

  for (const [key, value] of Object.entries(props)) {
  console.log(`${key}: ${value}`);
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
            data: [30, props[0].dollarAmount, 0],
            backgroundColor: [
              "Red",
              "Green"
            ],
            borderColor: ["Red", "Green"],
            borderWidth: 1
          },
        ]
      },
      options: {
        responsive: false
      }
    });
  });

  return (
    <>
      <canvas id="giftTotal" width="400" height="400" />
    </>
  );
}

export default Graph;