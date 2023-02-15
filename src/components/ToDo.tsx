import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

const List = styled.li`
  background-color: ${(props) => props.theme.listColor};
  color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-around;
  position: relative;
  height: 32px;
  line-height: 32px;
  font-family: "NanumSquareNeo-Variable";
  margin: 0.2rem 0;
  border: 1px solid ${(props) => props.theme.bgColor};
  box-shadow: 3px 3px 4px 0px black;
  span {
    font-family: "NanumSquareNeo-Variable";
    flex-grow: 4;
    margin: 0 4rem;
  }
  button {
    cursor: pointer;
    font-family: "NanumSquareNeo-Variable";
    border: 1px solid black;
    background-color: ${(props) => props.theme.listColor};
    text-transform: uppercase;
    flex-grow: 1;
    transition: 0.3s;
    user-select: none;
    &:hover {
      font-weight: 700;
      background-color: ${(props) => props.theme.accentColor};
    }
    &:active {
      transform: translate(2px, 0px);
      background-color: ${(props) => props.theme.textColor};
      color: white;
    }
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setCategory = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setCategory((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <List>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </List>
  );
}

export default ToDo;
