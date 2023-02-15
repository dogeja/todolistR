import { useRecoilState, useRecoilValue } from "recoil";
import {
  addCategoryState,
  Categories,
  categoryState,
  ICategory,
  toDoSelector,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";
import AddCategory from "./AddCategory";

const Title = styled.h1`
  font-size: 2.6rem;
  text-transform: uppercase;
  text-align: center;
  margin: 1.4rem 0;
  font-family: "NanumSquareNeo-Variable";
  font-weight: 900;
`;
const SelectTap = styled.div`
  width: 100%;
  margin: 1rem 0;
  position: relative;
  display: flex;
`;
const Select = styled.select`
  width: 120px;
  height: 50px;
  text-align: center;
  font-family: "NanumSquareNeo-Variable";
  font-weight: 700;
`;
const Contents = styled.article`
  position: relative;
  font-family: "NanumSquareNeo-Variable";
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 81.25%;
  align-items: left;
  img {
    width: 200px;
    height: 200px;
    margin: 50px auto;
  }
`;
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const addCategory = useRecoilValue(addCategoryState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <>
      <header>
        <Title>To Dos</Title>
      </header>
      <hr />
      <Contents>
        <SelectTap>
          <Select value={category} onInput={onInput}>
            <option value={Categories.TO_DO}>TO DO</option>
            <option value={Categories.DOING}>DOING</option>
            <option value={Categories.DONE}>DONE</option>
            {addCategory.map((category: any) => (
              <option key={Math.random()} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </SelectTap>
        <AddCategory></AddCategory>
        <CreateToDo />
        <ul>
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
        <img
          src="https://media.tenor.com/V6n6v8qdRn0AAAAM/typing-fast-typing.gif"
          alt="typing_cat"
        ></img>
      </Contents>
    </>
  );
}
/* interface IFormData {
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
        { 객체 내부의 값을 꺼내   스프레드함 }
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

*/
export default ToDoList;
