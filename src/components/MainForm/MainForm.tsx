import React, { useState } from 'react';
import './MainForm.css';
import { Select } from 'antd';
import { IMainFormProps } from '../../interfaces/propsInterfaces';
import { priorityOptions, statusOptions } from '../../data/searchOptions';

function MainForm(props: IMainFormProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [projectId, setProjectId] = useState<number | undefined>();
  const [assigneeId, setAssigneeId] = useState<number | undefined>();
  const [priority, setPriority] = useState<string | undefined>();

  const projectOptions: { value: number; label: string }[] = props.boards.map(item => ({
    value: item.id,
    label: `${item.id}. ${item.name}`,
  }));

  const assigneeOptions: { value: number; label: string }[] = props.users.map(item => ({
    value: item.id,
    label: item.fullName,
  }));

  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onDescriptionChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function handleChangeProject(value: number) {
    setProjectId(value);
  }

  function handleChangeAssignee(value: number) {
    setAssigneeId(value);
  }

  function handleChangePriority(value: string) {
    setPriority(value);
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    props.createIssue({
      assigneeId: assigneeId,
      boardId: projectId,
      description: description,
      priority: priority,
      title: title,
    });
    props.handleClose();
    setTitle('');
    setDescription('');
    setAssigneeId(undefined);
    setProjectId(undefined);
    setPriority(undefined);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        onChange={onTitleChange}
        value={title}
        placeholder="Название задачи"
        name="name"
        type="text"
      />
      <textarea
        className="form__input"
        onChange={onDescriptionChange}
        value={description}
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
      <Select className="form__select" showSearch placeholder="Статус" options={statusOptions} />
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
