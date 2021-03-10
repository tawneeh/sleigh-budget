import React, { useEffect } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';

function Graph(props) {
  //const { gift } = props; // remove this and console.log(props) if issues happen

  console.log(props, "graph line 6"); // passing down gift object - object within an object
  console.log(props[0].dollarAmount); // not undefined when adding the bracket notation!

  // const total = gifts.map((gift) => {
  //   // loop through gifts and add all of the dollarAmount properties together
  //   // gift.dollarAmount 
  // })

  // const total = Object.entries(gift) {

  // }

  useEffect(() => {
    const ctx = document.getElementById("giftTotal");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Saved", "Gift List Total"],
        datasets: [
          {
            label: "Dollar Bills",
            data: [10, props[0].dollarAmount, 0], // can hard code a dollarAmount in GiftList to pass down if needed
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