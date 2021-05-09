import { ReactNode } from 'react';

import { ButtonStyle, CustomButton } from './styles';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  buttonStyle: ButtonStyle;
}

const Button = (props: ButtonProps) => {
  const { buttonStyle, children, ...rest } = props;
  return (
    <CustomButton buttonStyle={buttonStyle} {...rest}>
      {children}
    </CustomButton>
  );
};

export { Button };
