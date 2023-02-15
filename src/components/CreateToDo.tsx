import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";
const Form = styled.form`
  align-items: center;
  display: flex;
  width: 100%;
  input {
    font-family: "NanumSquareNeo-Variable";
    height: 2.6rem;
    width: 100%;
    text-align: center;
  }
  button {
    font-family: "NanumSquareNeo-Variable";
    font-weight: 700;
    width: 30%;
    height: 2.6rem;
    transition: 0.4s;
    box-sizing: border-box;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { handleSubmit, register, setValue } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldTodos) => [
      { text: toDo, id: Date.now(), category },
      ...oldTodos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", {
          required: "please write a to do",
        })}
        placeholder="write your todo"
      />
      <button>ADD</button>
    </Form>
  );
};

export default CreateToDo;
/* 
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo; */
