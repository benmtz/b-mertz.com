import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export function Root() {

  // const currentTheme = "waves"

  return (
    <div className='relative h-full bg-repeat bg-mj box-content' style={{ backgroundImage: `url(/tiles/tiling_multicolor_waves.png)`}}>
      <Header/>
      <main className="relative">
        <div className="top-0 h-2 sticky z-1 backdrop-brightness-50" />
        <div className="bg-gray-50 sticky">
          <div className="container p-4 py-16 m-auto min-h-screen">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Root
