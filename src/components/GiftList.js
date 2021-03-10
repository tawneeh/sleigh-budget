import React from 'react';
import Gift from './Gift';
import Graph from './Graph';
import PropTypes from 'prop-types';
import StyledList from './StyledList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function GiftList(props) {
  useFirestoreConnect([
    { collection: 'gifts' }
  ]);

  const gifts = useSelector(state => state.firestore.ordered.gifts);
  console.log(gifts);
  if (isLoaded(gifts)) {
  return (
    <>
      <StyledList>
        {gifts.map((gift) => {
          return <Gift
            whenGiftClicked = { props.onGiftSelection }
            recipient={gift.recipient}
            giftName={gift.giftName}
            dollarAmount={gift.dollarAmount}
            id={gift.id}
            key={gift.id} />
        })}
      </StyledList>
      <Graph 
        {...gifts}/>
    </>
  );

  } else {
    return (
      <h3>Loading...</h3>
    )
  }
}

GiftList.propTypes = {
  onGiftSelection: PropTypes.func
};

export default GiftList;