import React from 'react';

import { Header } from './styles';

interface Props {
  title: string;
}

const PopupHeader = ({ title }: Props) => {
  return <Header>{title}</Header>;
};

export { PopupHeader };
