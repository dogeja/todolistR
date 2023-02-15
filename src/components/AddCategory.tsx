import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { addCategoryState } from "../atoms";
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
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", {
          minLength: {
            value: 1,
            message: "1글자 이상 입력하시오",
          },
        })}
        placeholder="ADD NEW CATEGORY"
      ></input>
      <button>ADD CATEGORY</button>
    </form>
  );
};
export default AddCategory;
