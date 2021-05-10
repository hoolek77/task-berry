import React from 'react';

import { FormInput } from './styles';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

const Input = ({ ...rest }: InputProps) => {
  return <FormInput {...rest} />;
};

export { Input };
