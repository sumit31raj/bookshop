import { NavItem } from "@/types";

type NavItems = NavItem[];

const NavItems: NavItems = [
  { id: 1, name: "Buy", href: "#" },
  {
    id: 2,
    name: "Rent",
    href: "#",
  },
  { id: 3, name: "Books", href: "books" },
  { id: 4, name: "My favourites", href: "/favourites" },
];

export default NavItems;
