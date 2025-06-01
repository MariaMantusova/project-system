import React, { useEffect, useState } from 'react';
import './MainForm.css';
import { Select } from 'antd';
import { IMainFormProps } from '../../interfaces/propsInterfaces';
import { priorityOptions, statusOptions } from '../../data/searchOptions';
import { useInput } from '../../hooks/ValidationHook/ValidationHook';

function MainForm(props: IMainFormProps) {
  const title = useInput('', { isEmpty: true });
  const description = useInput('', { isEmpty: true });

  const [projectId, setProjectId] = useState<number | null>(null);
  const [assigneeId, setAssigneeId] = useState<number | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const projectOptions = props.boards.map(item => ({
    value: item.id,
    label: `${item.id}. ${item.name}`,
  }));

  const assigneeOptions = props.users.map(item => ({
    value: item.id,
    label: item.fullName,
  }));

  useEffect(() => {
    if (props.currentIssue) {
      title.setValue(props.currentIssue.title ?? '');
      description.setValue(props.currentIssue.description ?? '');
      setAssigneeId(props.currentIssue.assignee?.id ?? null);
      setPriority(props.currentIssue.priority ?? null);
      setStatus(props.currentIssue.status ?? 'To do');

      props.boards.forEach(item => {
        if (item.name === props.currentIssue?.boardName) setProjectId(item.id);
      });
    } else {
      title.setValue('');
      description.setValue('');
      setAssigneeId(null);
      setPriority(null);
      setStatus(null);
      setProjectId(null);
    }
  }, [props.currentIssue]);

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const payload = {
      assigneeId: assigneeId ?? undefined,
      boardId: projectId ?? undefined,
      description: description.value,
      priority: priority ?? undefined,
      title: title.value,
    };

    if (props.createIssue) {
      props.createIssue(payload);
      title.setValue('');
      description.setValue('');
      setAssigneeId(null);
      setProjectId(null);
      setPriority(null);
      setStatus('To do');
    } else if (props.changeIssue && props.currentIssue) {
      props.changeIssue(props.currentIssue.id.toString(), {
        ...payload,
        status,
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
        disabled={!!props.currentIssue}
        onChange={setProjectId}
        value={projectId}
        placeholder="Проект"
        options={projectOptions}
      />
      <Select
        className="form__select"
        showSearch
        onChange={setStatus}
        value={status}
        placeholder="Статус"
        options={statusOptions}
      />
      <Select
        className="form__select"
        showSearch
        onChange={setPriority}
        value={priority}
        placeholder="Приоритет"
        options={priorityOptions}
      />
      <Select
        className="form__select"
        showSearch
        onChange={setAssigneeId}
        value={assigneeId}
        placeholder="Исполнитель"
        options={assigneeOptions}
      />
      <button className="form__button">{props.currentIssue ? 'Сохранить' : 'Создать'}</button>
    </form>
  );
}

export default MainForm;
