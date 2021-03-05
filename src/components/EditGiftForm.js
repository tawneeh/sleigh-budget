import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditGiftForm (props) {
  const { gift } = props;
  const firestore = useFirestore();

  function handleEditGiftFormSubmission(event) {
    event.preventDefault();
    props.onEditGift();
    const propertiesToUpdate = {
      recipient: event.target.recipient.value, 
      giftName: event.target.giftName.value, 
      dollarAmount: parseInt(event.target.dollarAmount.value), 
      id: gift.id
    }
    return firestore.update({collection: 'gifts', doc: gift.id, propertiesToUpdate})
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler=
        {handleEditGiftFormSubmission}
        buttonText="Update the Gift!" />
    </>
  );
}

EditGiftForm.propTypes = {
  onEditGift: PropTypes.func
};

export default EditGiftForm;