import { useState } from 'react';

const useCustomForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const clear = () => {
    setValues(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return {
    values,
    clear,
    handleChange,
    handleSubmit,
  };
};

export default useCustomForm;
