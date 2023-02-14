import { useState } from "react";
const ToDolist = () => {
  const [Todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(Todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={Todo}
          placeholder="Write a Todo"
        ></input>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default ToDolist;
