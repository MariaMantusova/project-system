import React from 'react';
import './MainForm.css';
import { Select } from 'antd';

function MainForm() {
  const projectOptions: { value: string; label: string }[] = [
    { value: 'JS project', label: 'JS project' },
    { value: 'Mariia', label: 'Mariia' },
    { value: 'Sevak', label: 'Sevak' },
  ];

  const statusOptions: { value: string; label: string }[] = [
    { value: 'todo', label: 'To do' },
    { value: 'progress', label: 'In progress' },
    { value: 'done', label: 'Done' },
  ];

  const priorityOptions: { value: string; label: string }[] = [
    { value: 'high', label: 'Высокий' },
    { value: 'low', label: 'Низкий' },
    { value: 'no', label: 'Нет приоритета' },
    { value: 'medium', label: 'Средний' },
  ];

  const assigneeOptions: { value: string; label: string }[] = [
    { value: 'front', label: 'Frontend команда' },
    { value: 'back', label: 'Backend команда' },
    { value: 'devops', label: 'Devops команда' },
    { value: 'manager', label: 'Project manager' },
    { value: 'android', label: 'Android команда' },
    { value: 'ios', label: 'Ios команда' },
  ];

  return (
    <form className="form">
      <input className="form__input" placeholder="Название задачи" name="name" type="text" />
      <textarea className="form__input" placeholder="Описание задачи" name="description" />
      <Select className="form__select" showSearch placeholder="Проект" options={projectOptions} />
      <Select className="form__select" showSearch placeholder="Статус" options={statusOptions} />
      <Select
        className="form__select"
        showSearch
        placeholder="Приоритет"
        options={priorityOptions}
      />
      <Select
        className="form__select"
        showSearch
        placeholder="Исполнитель"
        options={assigneeOptions}
      />
      <button className="form__button">Создать</button>
    </form>
  );
}

export default MainForm;
