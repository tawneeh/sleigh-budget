import React from "react";
import PropTypes from "prop-types";

function GiftDetail(props) {
  const { gift, onClickingDelete } = props;
  return (
    <>
      <h1>Gift Details</h1>
      <h3>{gift.recipient}</h3>
      <h3>{gift.giftName}</h3>
      <h3>{gift.dollarAmount}</h3>
      <button onClick={ props.onClickingEdit }>Update this Gift</button>
      <button onClick={ ()=> onClickingDelete(gift.id) }>Delete</button>
    </>
  );
}

GiftDetail.propTypes = {
  gift: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default GiftDetail;