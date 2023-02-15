import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { addCategoryState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  input {
    font-family: "NanumSquareNeo-Variable";
    height: 2.6rem;
    align-items: center;
    flex-grow: 3;
    text-align: center;
  }
  button {
    font-family: "NanumSquareNeo-Variable";
    flex-grow: 1;
    font-weight: 700;
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
interface ICategory {
  category: string;
}
const AddCategory = () => {
  const [category, setCategory] = useRecoilState(addCategoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const onValid = ({ category }: ICategory) => {
    console.log(category);
    setCategory((oldCategory: any) => {
      return [...oldCategory, category];
    });
    setValue("category", "");
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", {
          required: "Please wrote your new category",
        })}
        placeholder="ADD NEW CATEGORY"
      ></input>
      <button>ADD CATEGORY</button>
    </Form>
  );
};
export default AddCategory;
