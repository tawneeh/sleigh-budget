import React, { useEffect } from 'react';
import Chart from 'chart.js';

function Graph() {
  useEffect(() => {
    const ctx = document.getElementById("giftTotal");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Saved", "Needed"],
        datasets: [
          {
            label: "Dollar Bills",
            data: [10, 19, 0],
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