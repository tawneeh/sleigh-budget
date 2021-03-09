import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { useFirestoreConnect } from 'react-redux-firebase';

function Graph() {
  useFirestoreConnect([
    { collection: 'gifts' }
  ]);

  useEffect(() => {
    const ctx = document.getElementById("giftTotal");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Saved", "Needed"],
        datasets: [
          {
            label: "Dollar Bills",
            data: [10, gift.dollarAmount, 0],
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
      <canvas id="giftTotal" width="100" height="100" />
    </>
  );
}

export default Graph;