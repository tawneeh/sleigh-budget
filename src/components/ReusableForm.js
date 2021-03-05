import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='recipient'
          placeholder='Intended Recipient' />
        <input
          type='text'
          name='giftName'
          placeholder='The Gift' />
        <input
          type='number'
          name='dollarAmount'
          placeholder='$$' />
      <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;