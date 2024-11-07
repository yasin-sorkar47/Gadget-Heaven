import { useContext } from "react";
import DashBoardCard from "../components/DashBoardCard";
import WishList from "../components/WishList";
import { DashBoardCardContext } from "../context";

function Dashboard() {
  const [showDahsBoardCard, _] = useContext(DashBoardCardContext);

  return <>{showDahsBoardCard ? <DashBoardCard /> : <WishList />}</>;
}

export default Dashboard;
