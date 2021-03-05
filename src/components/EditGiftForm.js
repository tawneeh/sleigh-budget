import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditGiftForm (props) {
  const { gift } = props;

  function handleEditGiftFormSubmission(event) {
    event.preventDefault();
    props.onEditGift({recipient: event.target.recipient.value, giftName: event.target.giftName.value, dollarAmount: parseInt(event.target.dollarAmount.value), id: gift.id
    });
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