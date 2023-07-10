import { AddTaskButton, RemoveTaskButton } from '.';

export const InputText = ({ handleAdd, handleRemove }: any) => {
  return (
    <>
      <h2>Add New Task</h2>
      <form onSubmit={handleAdd}>
        <label htmlFor=''>Id Developer: </label>
        <input type='text' name='idDeveloper' />
        <label htmlFor=''>Task: </label>
        <input type='text' name='title' />
        <label htmlFor=''>Description: </label>
        <input type='text' name='description' />
        <label htmlFor=''>Priority: </label>
        <input type='text' name='priority' />
        <AddTaskButton submit='submit' />
      </form>
      <RemoveTaskButton handleRemove={handleRemove} />
    </>
  );
};
