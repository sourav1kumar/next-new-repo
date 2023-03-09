"use client"
import React, { useEffect, useState } from "react";

const HookComp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(100);
  }, []);

  return (
    <div>
      <h6>This is HookComp</h6>
      <button onClick={() => setCount(count - 1)}>-</button>
      {` Count is ${count} `}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default HookComp;
