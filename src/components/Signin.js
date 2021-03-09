import React from 'react';
import firebase from 'firebase/app';
import StyledButton from './StyledButton';
import { FormGroup, Input } from './StyledForm';

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("Sign up success!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Sign in success!"); // Route to Home on successful Signin
    }).catch(function(error) {
      console.log(error.message);
    });
    // firebase.auth().signInWithRedirect();
    // firebase.auth().onAuthStateChanged(user => {
    //   if(user) {
    //   }
    // });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Sign out success!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign up</h1>
      <FormGroup onSubmit={doSignUp}>
        <Input
          type='text'
          name='email'
          placeholder='email' />
        <Input
          type='password'
          name='password'
          placeholder='password' />
        <StyledButton type='submit'>Sign up</StyledButton>
      </FormGroup>

      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <FormGroup>
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' />
          <input
            type='password'
            name='signinPassword'
            placeholder='password' />
          <StyledButton type='submit'>Sign in</StyledButton>
        </form>
      </FormGroup>

      <StyledButton onClick={doSignOut}>Sign Out</StyledButton>
    </>
  );
}

export default Signin;