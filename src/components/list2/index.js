import { useState } from "react";
import { Fild } from "../field";

export const List2 = () => {
  const [list, setList] = useState([]);

  const updateValue = (index, value) => {
    if (!value) {
      setList([...list].splice(index, 1));
    } else if (index < list.length) {
      const newList = [...list];
      newList[index] = value;
      setList(newList);
    } else {
      setList([...list, value]);
    }
  };

  const addNewItem = (e) => {
    updateValue(list.length || 1, e.target.value);
    e.target.value = "";
  };
  return (
    <div>
      <h1>Cons</h1>
      {list.map((value, index) => {
        return (
          <div key={index}>
            {index + 1}
            <Fild
              defaultValue={value}
              callBack={(value) => {
                updateValue(index, value);
              }}
            />
          </div>
        );
      })}
      <div>
        {list.length + 1}
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addNewItem(e);
            }
          }}
          onBlur={addNewItem}
        />
      </div>
    </div>
  );
};
