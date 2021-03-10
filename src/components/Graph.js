import React from 'react';
import PropTypes from 'prop-types';
//import Chart from 'chart.js';
//import * as data from './gift.json'; (only if using JSON Object file)

function Graph(props) {
  const { gift } = props;
  console.log(gift); // undefined. not passing props properly

  return (
    <h1>{props.dollarAmount}</h1>
  );
}

Graph.propTypes = {
  gift: PropTypes.object
};

export default Graph;