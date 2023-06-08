import { useCallback } from "react";
import { List } from "./list";

export const NewList = ({ title, list, onChange }) => {
  const henddleChange = useCallback(
    (id, value) =>
      onChange((current) => {
      
        if (id) {
          if (value) {
            let newList = JSON.parse(JSON.stringify(current));
            const index = list.findIndex((item) => item.id === id);
            if(newList[index]) 
                newList[index].name = value;
            return newList;
          }
          return current.filter((item) => item.id !== id);
        }

        if (value) return [...current,{ id: Date.now(), name: value }];
        return current;
      }),
    []
  );
  return (
    <div>
      <p>{title}</p>
      <List list={list} onChange={henddleChange} />
    </div>
  );
};
