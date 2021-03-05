import React from "react";
import Gift from "./Gift";
import PropTypes from "prop-types";

function GiftList(props) {
  return (
    <>
      {Object.values(props.giftList).map((gift) => {
        return <Gift
          whenGiftClicked = { props.onGiftSelection }
          recipient={gift.recipient}
          giftName={gift.giftName}
          dollarAmount={gift.dollarAmount}
          id={gift.id}
          key={gift.id} />
      })}
    </>
  );
}

GiftList.propTypes = {
  giftList: PropTypes.object,
  onGiftSelection: PropTypes.func
};

export default GiftList;