import { useEffect, useRef, useState } from "react";

export const Fild = ({ callBack, defaultValue = "" }) => {
  const input = useRef(null);
  const [value, setVelue] = useState(defaultValue);
  const [editapble, setEditable] = useState(false);
  useEffect(() => {
    if (editapble) {
      input.current?.focus();
    }
  }, [editapble]);
  useEffect(() => {
    setVelue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (!editapble) {
      callBack(value);
    }
  }, [editapble, value]);

  if (editapble) {
    return (
      <input
        ref={input}
        value={value}
        onChange={(e) => {
          setVelue(e.target.value);
        }}
        onBlur={() => {
          setEditable(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEditable(false);
          }
        }}
      />
    );
  }
  return (
    <div
      onClick={() => {
        setEditable(true);
      }}
    >
      {value}
    </div>
  );
};
