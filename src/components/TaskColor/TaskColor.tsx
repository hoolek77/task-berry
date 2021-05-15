import React, { Dispatch, SetStateAction } from 'react';
import { CreateTaskType } from 'models';

import { ColorBox } from './styles';

interface Props {
  selectedColor: string;
  color: string;
  setTask: Dispatch<SetStateAction<CreateTaskType>>;
}

const TaskColor = ({ selectedColor, color, setTask }: Props) => {
  return (
    <ColorBox color={color} selectedColor={selectedColor} onClick={() => setTask((prev) => ({ ...prev, color }))} />
  );
};

export { TaskColor };
