import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewGiftForm(props) {
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewGiftFormSubmission}
        buttonText="Log a new Gift!" />
    </>
  );

    function handleNewGiftFormSubmission(event) {
    event.preventDefault();
    props.onNewGiftCreation({recipient: event.target.recipient.value, giftName: event.target.giftName.value, dollarAmount: parseInt(event.target.dollarAmount.value), id: v4()});
  }
}

NewGiftForm.propTypes = {
  onNewGiftCreation: PropTypes.func
};

export default NewGiftForm;