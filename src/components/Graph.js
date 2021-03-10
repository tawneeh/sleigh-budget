import React, { useEffect } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';

function Graph(props) {

  console.log(props, "graph line 6"); // passing down gift object - object within an object
  console.log(props[0].dollarAmount); // not undefined when adding the bracket notation!

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
            data: [10, props[0].dollarAmount, 0], 
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
      <h3>{props[0].dollarAmount}</h3>
    </>
  );
}

Graph.propTypes = {
  gift: PropTypes.object
};

export default Graph;