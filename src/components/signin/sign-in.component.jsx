import React from 'react';

import './sign-in.styles.scss';
import useCustomForm from '../../hooks/use-custom-form';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const { values, handleChange, handleSubmit } = useCustomForm({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
