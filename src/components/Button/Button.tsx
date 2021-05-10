import { ReactNode } from 'react';
import { Loader } from 'components/Loader';

import { ButtonStyle, CustomButton } from './styles';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  buttonStyle: ButtonStyle;
  isLoading?: boolean;
}

const Button = ({ children, buttonStyle, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <CustomButton buttonStyle={buttonStyle} {...rest} disabled={isLoading}>
      {isLoading ? <Loader size={28} /> : children}
    </CustomButton>
  );
};

export { Button };
