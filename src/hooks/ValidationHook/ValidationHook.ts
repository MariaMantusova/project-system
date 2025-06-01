import React, { useEffect } from 'react';
import { IValidations } from '../../interfaces/mainInterfaces';

const useValidation = (value: string, validations: IValidations) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [inputValid, setInputValid] = React.useState(false);

  useEffect(() => {
    for (const validation in validations) {
      if (validation === 'isEmpty') {
        if (value) setIsEmpty(false);
        else setIsEmpty(true);
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty) setInputValid(false);
    else setInputValid(true);
  }, [isEmpty]);

  return {
    isEmpty,
    inputValid,
  };
};

const useInput = (initialValue: string, validations: IValidations) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setIsDirty] = React.useState(false);
  const valid = useValidation(value, validations);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(evt.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    setIsDirty,
    ...valid,
  };
};

export { useInput };
