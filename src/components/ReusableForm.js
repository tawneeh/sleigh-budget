import React from "react";
import PropTypes from "prop-types";
import StyledButton from './StyledButton';
import { FormGroup } from './StyledForm';

function ReusableForm(props) {
  return (
    <>
      <FormGroup>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='recipient'
            placeholder='recipient' />
          <input
            type='text'
            name='giftName'
            placeholder='gift' />
          <input
            type='number'
            name='dollarAmount'
            placeholder='$' />
        <StyledButton type='submit'>{props.buttonText}</StyledButton>
        </form>
      </FormGroup>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;