import { useState } from 'react';

const useCustomForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ values });
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useCustomForm;
