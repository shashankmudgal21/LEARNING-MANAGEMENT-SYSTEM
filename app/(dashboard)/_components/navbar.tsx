import  Sidebar  from "./sidebar";
import MoblieSideBar from "./mobile-sidebar";
import NavbarRoutes from "@/components/navbar-routes";

const Navbar = () => {
  return (
    <div className="p-4 border-b shadow-sm flex items-center h-full bg-white">
      <MoblieSideBar/>
      <NavbarRoutes/>
    </div>
  );
};

export default Navbar;
