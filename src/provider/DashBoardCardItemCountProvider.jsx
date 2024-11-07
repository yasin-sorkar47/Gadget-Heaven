import { useState } from "react";
import { DashBoardCardItemCountContext } from "../context";

function DashBoardCardItemCountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <DashBoardCardItemCountContext.Provider value={{ count, setCount }}>
      {children}
    </DashBoardCardItemCountContext.Provider>
  );
}

export default DashBoardCardItemCountProvider;
