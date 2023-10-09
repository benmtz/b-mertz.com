import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export function Root() {
  return (
    <div className='h-full w-full bg-repeat bg-mj box-content'>
      <Header tile={"multicolor_waves"}/>
      <main className="bg-gray-50 w-full">
        <div className="container p-4 py-16 m-auto">
          <Outlet />
        </div>
      </main>
      <Footer tile={'multicolor_waves'} />
    </div>
  );
}

export default Root
