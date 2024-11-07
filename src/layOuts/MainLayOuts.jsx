import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashBoardCardProvider from "../provider/DashBoardCardProvider";

function MainLayOuts() {
  return (
    <>
      <ToastContainer />
      <DashBoardCardProvider>
        <Header />
        <Outlet />
        <Footer />
      </DashBoardCardProvider>
    </>
  );
}

export default MainLayOuts;
