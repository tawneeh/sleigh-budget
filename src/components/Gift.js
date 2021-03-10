import React from 'react';
import PropTypes from 'prop-types';
import StyledHr from './StyledHr';

function Gift(props) {
  return (
    <>
      <div onClick = { () => props.whenGiftClicked(props.id) }>
        <h3>{props.recipient}</h3>
        <h3>{props.giftName}</h3>
        <h3>${props.dollarAmount}</h3>
      </div>
      <StyledHr />
    </>
  );
}

Gift.propTypes = {
  recipient: PropTypes.string,
  giftName: PropTypes.string,
  dollarAmount: PropTypes.number
};

export default Gift;