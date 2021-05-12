import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button';
import { ButtonStyle } from 'components/Button/styles';
import { Input } from 'components/Input';
import { Popup } from 'components/Popup';
import { PopupOverlay } from 'components/PopupOverlay';
import { TaskColor } from 'components/TaskColor';
import { colors } from 'constants/colors';
import { RootState } from 'store';
import { addTaskThunk, CreateTaskType } from 'store/reducers/tasks';
import { InitialUserState } from 'store/reducers/user';

import { AddTaskHeader, ColorsContainer } from './styles';

interface Props {
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}

const TaskAdd = ({ setIsPopup }: Props) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState<CreateTaskType>({ title: '', description: '', color: '' });
  const { title, description, color } = task;
  const { accessToken } = useSelector<RootState, InitialUserState>((state) => state.user);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(addTaskThunk({ task, accessToken }));
    setIsPopup(false);
  };

  return (
    <>
      <Popup width="450px" height="450px">
        <AddTaskHeader>Add a new task</AddTaskHeader>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTask((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
          <Input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setTask((prev) => ({ ...prev, description: e.target.value }))}
            required
          />
          <ColorsContainer>
            {colors.map((item) => (
              <TaskColor key={item.id} selectedColor={color} color={item.color} setTask={setTask} />
            ))}
          </ColorsContainer>
          <Button type="submit" buttonStyle={ButtonStyle.SUBMIT_MAIN}>
            Add Task
          </Button>
        </form>
      </Popup>
      <PopupOverlay onClick={() => setIsPopup(false)} />
    </>
  );
};

export { TaskAdd };
