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
interface IFormData {
  [key: string]: string;
}
const ToDolist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* 객체 내부의 값을 꺼내   스프레드함 */}
        <input
          {...register("Email", {
            required: "입력해줘 제발",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: "올바른 형식으로 입력해 주세요",
            },
          })}
          placeholder="Write a Todo"
        ></input>
        <span style={{ color: "white" }}>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", { required: true })}
          placeholder="FirstName"
        ></input>
        <input
          {...register("LastName", { required: true })}
          placeholder="LastName"
        ></input>
        <input
          {...register("ID", {
            required: true,
            minLength: {
              value: 6,
              message: "6글자 이상으로 입력해주세요!",
            },
          })}
          placeholder="ID"
        ></input>
        <input {...register("PW", { required: true })} placeholder="PW"></input>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default ToDolist;
