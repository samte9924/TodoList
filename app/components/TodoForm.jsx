import { addTodo } from "@app/server-actions/addTodo";

const TodoForm = () => {
  return (
    <form action={addTodo}>
      <div>
        <input type="text" id="task" name="task" required />
        <button type="submit">+</button>
      </div>
    </form>
  );
};

export default TodoForm;
