import React, { useEffect, useState } from 'react';
import './MainForm.css';
import { Select } from 'antd';
import { IMainFormProps } from '../../interfaces/propsInterfaces';
import { priorityOptions, statusOptions } from '../../data/searchOptions';
import { useInput } from '../../hooks/ValidationHook/ValidationHook';

function MainForm(props: IMainFormProps) {
  const title = useInput('', { isEmpty: true });
  const description = useInput('', { isEmpty: true });
  const [projectId, setProjectId] = useState<number | undefined>();
  const [assigneeId, setAssigneeId] = useState<number | undefined>();
  const [priority, setPriority] = useState<string | undefined>();
  const [status, setStatus] = useState<string>('');

  const projectOptions: { value: number; label: string }[] = props.boards.map(item => ({
    value: item.id,
    label: `${item.id}. ${item.name}`,
  }));

  const assigneeOptions: { value: number; label: string }[] = props.users.map(item => ({
    value: item.id,
    label: item.fullName,
  }));

  useEffect(() => {
    if (props.currentIssue) {
      title.setValue(props.currentIssue.title);
      description.setValue(props.currentIssue.description);
      setProjectId(props.currentIssue.boardId);
      setAssigneeId(props.currentIssue.assignee.id);
      setPriority(props.currentIssue.priority);
    }
  }, [props.currentIssue]);

  function handleChangeProject(value: number) {
    setProjectId(value);
  }

  function handleChangeAssignee(value: number) {
    setAssigneeId(value);
  }

  function handleChangePriority(value: string) {
    setPriority(value);
  }

  function handleChangeStatus(value: string) {
    setStatus(value);
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (props.createIssue) {
      props.createIssue({
        assigneeId: assigneeId,
        boardId: projectId,
        description: description.value,
        priority: priority,
        title: title.value,
      });

      title.setValue('');
      description.setValue('');
      setAssigneeId(undefined);
      setProjectId(undefined);
      setPriority(undefined);
    } else if (props.changeIssue) {
      props.changeIssue(props.currentIssue ? props.currentIssue.id.toString() : '', {
        assigneeId: assigneeId,
        status: status,
        description: description.value,
        priority: priority,
        title: title.value,
      });
    }

    props.handleClose();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        onChange={title.onChange}
        value={title.value}
        placeholder="Название задачи"
        name="name"
        type="text"
      />
      <textarea
        className="form__input"
        onChange={description.onChange}
        value={description.value}
        placeholder="Описание задачи"
        name="description"
      />
      <Select
        className="form__select"
        showSearch
        onChange={handleChangeProject}
        value={projectId}
        placeholder="Проект"
        options={projectOptions}
      />
      <Select
        className="form__select"
        onChange={handleChangeStatus}
        value={status}
        showSearch
        placeholder="Статус"
        options={statusOptions}
      />
      <Select
        className="form__select"
        showSearch
        onChange={handleChangePriority}
        placeholder="Приоритет"
        options={priorityOptions}
        value={priority}
      />
      <Select
        className="form__select"
        onChange={handleChangeAssignee}
        showSearch
        value={assigneeId}
        placeholder="Исполнитель"
        options={assigneeOptions}
      />
      <button className="form__button">Создать</button>
    </form>
  );
}

export default MainForm;
