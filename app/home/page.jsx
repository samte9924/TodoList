import EditTodo from "@app/components/EditTodo";
import TodoForm from "@app/components/TodoForm";
import { deleteTodo } from "@app/server-actions/deleteTodo";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const TodoList = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: todos, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching todos");
  }

  console.log({ todos });

  return (
    <div>
      <div>
        <div>
          <h1>Le mie attività</h1>
        </div>
        <TodoForm />
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              {todo.task}
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <button type="submit">X</button>
              </form>
              <EditTodo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
