import React, { Dispatch, SetStateAction } from 'react';
import { CreateTaskType, UpdateTaskType } from 'models';

import { ColorBox } from './styles';

interface Props {
  selectedColor: string;
  color: string;
  setTask: Dispatch<SetStateAction<CreateTaskType | UpdateTaskType>>;
}

const TaskColor = ({ selectedColor, color, setTask }: Props) => {
  return (
    <ColorBox color={color} selectedColor={selectedColor} onClick={() => setTask((prev) => ({ ...prev, color }))} />
  );
};

export { TaskColor };
