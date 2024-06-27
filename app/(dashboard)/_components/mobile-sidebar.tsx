import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
const MoblieSideBar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden pr-4">
          <Menu />
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0 bg-white">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MoblieSideBar;
