import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Popup } from 'components/Popup';
import { PopupOverlay } from 'components/PopupOverlay';
import { TaskColor } from 'components/TaskColor';
import { colors } from 'constants/colors';
import { useTasks } from 'hooks';
import { ButtonStyle, CreateTaskType } from 'models';

import { AddTaskHeader, ColorsContainer } from './styles';

interface Props {
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}

const TaskAdd = ({ setIsPopup }: Props) => {
  const { t } = useTranslation();
  const { addTask, isLoading } = useTasks();
  const [task, setTask] = useState<CreateTaskType>({ title: '', description: '', color: colors[0].color });
  const { title, description, color, label } = task;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTask(task);
    setIsPopup(false);
  };

  return (
    <>
      <Popup width="450px" height="530px">
        <AddTaskHeader>{t('home.taskAdd.header')}</AddTaskHeader>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder={t('home.taskAdd.title')}
            value={title}
            onChange={(e) => setTask((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
          <Input
            type="text"
            name="description"
            placeholder={t('home.taskAdd.description')}
            value={description}
            onChange={(e) => setTask((prev) => ({ ...prev, description: e.target.value }))}
            required
          />
          <Input
            type="text"
            name="label"
            placeholder={t('home.taskAdd.label')}
            value={label}
            onChange={(e) => setTask((prev) => ({ ...prev, label: e.target.value }))}
          />
          <ColorsContainer>
            {colors.map((item) => (
              <TaskColor key={item.id} selectedColor={color} color={item.color} setTask={setTask} />
            ))}
          </ColorsContainer>
          <Button type="submit" buttonStyle={ButtonStyle.SUBMIT_MAIN} disabled={isLoading}>
            {t('home.taskAdd.button')}
          </Button>
        </form>
      </Popup>
      <PopupOverlay onClick={() => setIsPopup(false)} />
    </>
  );
};

export { TaskAdd };
