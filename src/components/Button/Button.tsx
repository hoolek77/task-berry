import { ReactNode } from 'react';
import { Loader } from 'components/Loader';
import { ButtonStyle } from 'models';

import { CustomButton } from './styles';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  buttonStyle: ButtonStyle;
  isLoading?: boolean;
}

const Button = ({ children, buttonStyle, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <CustomButton buttonStyle={buttonStyle} {...rest}>
      {isLoading ? <Loader size={28} /> : children}
    </CustomButton>
  );
};

export { Button };
