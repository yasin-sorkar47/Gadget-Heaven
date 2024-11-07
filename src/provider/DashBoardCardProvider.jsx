import { useState } from "react";
import { DashBoardCardContext } from "../context";

function DashBoardCardProvider({ children }) {
  const [showDahsBoardCard, setShowDashBoardCard] = useState(true);
  return (
    <DashBoardCardContext.Provider
      value={[showDahsBoardCard, setShowDashBoardCard]}
    >
      {children}
    </DashBoardCardContext.Provider>
  );
}

export default DashBoardCardProvider;
