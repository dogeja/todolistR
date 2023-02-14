import { useState } from "react";
import { useForm } from "react-hook-form";
/* const ToDolist = () => {
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
}; */
const ToDolist = () => {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        {/* 객체 내부의 값을 꺼내   스프레드함 */}
        <input {...register("Email")} placeholder="Write a Todo"></input>
        <input {...register("FirstName")} placeholder="FirstName"></input>
        <input {...register("LastName")} placeholder="LastName"></input>
        <input {...register("ID")} placeholder="ID"></input>
        <input {...register("PW")} placeholder="PW"></input>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default ToDolist;
