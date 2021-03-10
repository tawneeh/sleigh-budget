import React from "react";
import PropTypes from "prop-types";
import StyledButton from './StyledButton';

function GiftDetail(props) {
  const { gift, onClickingDelete } = props;

  const listStyles = {
    textAlign: 'center',
    fontStyle: 'italic'
  }

  return (
    <div style={listStyles}>
      <h1>Gift Details</h1>
      <h3>{gift.recipient}</h3>
      <h3>{gift.giftName}</h3>
      <h3>${gift.dollarAmount}</h3>
      <StyledButton onClick={ props.onClickingEdit }>Update this Gift</StyledButton>
      <StyledButton onClick={ ()=> onClickingDelete(gift.id) }>Delete</StyledButton>
    </div>
  );
}

GiftDetail.propTypes = {
  gift: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default GiftDetail;