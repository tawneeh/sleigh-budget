import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewGiftForm(props) {

  const firestore = useFirestore();
  function addGiftToFirestore(event) {
    event.preventDefault();

    props.onNewGiftCreation();

    return firestore.collection('gifts').add(
      {
        recipient: event.target.recipient.value,
        giftName: event.target.giftName.value,
        dollarAmount: parseInt(event.target.dollarAmount.value)
      }
    );
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={addGiftToFirestore}
        buttonText="Log a new Gift!" />
    </>
  );

  //   function handleNewGiftFormSubmission(event) {
  //   event.preventDefault();
  //   props.onNewGiftCreation({recipient: event.target.recipient.value, giftName: event.target.giftName.value, dollarAmount: parseInt(event.target.dollarAmount.value), id: v4()});
  // }

}

NewGiftForm.propTypes = {
  onNewGiftCreation: PropTypes.func
};

export default NewGiftForm;