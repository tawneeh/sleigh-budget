import React, { useEffect } from 'react';
import Chart from 'chart.js';

function Graph(props) {

  console.log(props); // passing down gift object - object within an object
  console.log(props[0].dollarAmount);

  const values = Object.values(props); // array of objects
  const result = values.map(a => a.dollarAmount); // loop through the array
  console.log(result); // result is an array of dollarAmount numbers!

  const total = result.reduce((a, b) => a + b, 0); // might add them all up!
  console.log(total);

  useEffect(() => {
    const ctx = document.getElementById("giftTotal");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Saved", "Gift List Total"],
        datasets: [
          {
            label: "Dollar Bills",
            data: [30, total, 0],
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