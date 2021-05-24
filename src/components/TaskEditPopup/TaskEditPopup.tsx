import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Popup } from 'components/Popup';
import { PopupHeader } from 'components/PopupHeader';
import { PopupOverlay } from 'components/PopupOverlay';
import { TaskColor } from 'components/TaskColor';
import { colors } from 'constants/colors';
import { ButtonStyle, CreateTaskType, UpdateTaskType } from 'models';

import { ColorsContainer } from './styles';

interface Props {
  setIsPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTaskData: Dispatch<SetStateAction<UpdateTaskType>>;
  task: UpdateTaskType;
}

const TaskEditPopup = ({ setIsPopup, setUpdateTaskData, task }: Props) => {
  const { t } = useTranslation();
  const { color, label } = task;

  return (
    <>
      <Popup width="450px" height="350px">
        <PopupHeader title={t('home.taskEdit.header')} />
        <Input
          type="text"
          name="label"
          placeholder={t('home.taskAdd.label')}
          value={label}
          onChange={(e) => setUpdateTaskData((prev) => ({ ...prev, label: e.target.value }))}
        />
        <ColorsContainer>
          {colors.map((item) => (
            <TaskColor
              key={item.id}
              selectedColor={color as string}
              color={item.color}
              setTask={setUpdateTaskData as Dispatch<SetStateAction<CreateTaskType | UpdateTaskType>>}
            />
          ))}
        </ColorsContainer>
        <Button buttonStyle={ButtonStyle.SUBMIT_MAIN} onClick={() => setIsPopup(false)}>
          {t('home.task.close')}
        </Button>
      </Popup>
      <PopupOverlay onClick={() => setIsPopup(false)} />
    </>
  );
};

export { TaskEditPopup };
