import Navbar from "./sections/Navbar";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "./ui/sheet";

const Sidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">
          <Navbar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
