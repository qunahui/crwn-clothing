import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import useCustomForm from '../../hooks/use-custom-form';

const SignUp = () => {
  const initialValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { values, handleChange, handleSubmit, clear } = useCustomForm({
    initialValues,
    onSubmit: async () => {
      const { email, displayName, password, confirmPassword } = values;
      if (password !== confirmPassword) {
        alert("Password don't match");
        return;
      }
      try {
        const { user } = auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, displayName);
      } catch (e) {
        console.log('Error: ', e.message);
      }
    },
  });

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
