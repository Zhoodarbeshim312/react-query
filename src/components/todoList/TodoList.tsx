import { useGetTodo } from "../../hooks/getTodo/useGetTodo";
import scss from "./TodoList.module.scss";
export interface Daum {
  _id: number;
  age: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
const TodoList = () => {
  const { data: todos, error, isError, isLoading } = useGetTodo();
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          {isLoading
            ? "Loading..."
            : todos.map((el: Daum) => (
                <div key={el._id} className={scss.card}>
                  <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                    alt="img"
                  />
                  <h1>{el.name}</h1>
                  <h1>{el.age}</h1>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
