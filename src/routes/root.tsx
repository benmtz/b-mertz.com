import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import tiling from "../assets/tiling_forest.png";

export function Root() {
  return (
    <div className='h-full w-full bg-repeat bg-mj box-content' style={{ backgroundImage: `url(${tiling})` }}>
      <Header />
      <main className="bg-white w-full">
        <div className="container p-4 m-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Root
