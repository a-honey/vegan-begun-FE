import NAVITEMS from "@/app/_constants/NAVITEMS";
import { NavItem } from "../../atoms";

export default function NavBar() {
  return (
    <nav>
      {NAVITEMS.map((item) => (
        <NavItem key={item.name} name="recommend" imgIcon="" />
      ))}
    </nav>
  );
}
