import { useState } from "react";
import scss from "./TodoCreate.module.scss";
import { useCreateTodo } from "../../hooks/createTodo/useCreateTodo";
type Tvalues = {
  name: string;
  age: string;
};
const TodoCreate = () => {
  const [values, setValues] = useState<Tvalues>({
    name: "",
    age: "",
  });
  const { error, isError, mutate: createTodo, isPending } = useCreateTodo();

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <section className={scss.TodoCreate}>
      <div className="container">
        <div className={scss.content}>
          <h1>Create Todo</h1>
          <div className={scss.form}>
            <input
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
              placeholder="Name..."
              value={values.name}
            />
            <input
              onChange={(e) => setValues({ ...values, age: e.target.value })}
              type="text"
              placeholder="Age..."
              value={values.age}
            />
            <button onClick={() => createTodo(values)}>
              {isPending ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoCreate;
