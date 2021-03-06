import React, { useEffect } from 'react';
import Chart from 'chart.js';

function Graph(props) {

  const values = Object.values(props);
  const result = values.map(a => a.dollarAmount);
  const total = result.reduce((a, b) => a + b, 0);

  useEffect(() => {
    const ctx = document.getElementById("giftTotal");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Saved", "Needed"],
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
      <canvas id="giftTotal" width="600" height="600" />
    </>
  );
}

export default Graph;