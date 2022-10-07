import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "About", path: "/about" },
  ];
  return (
    <nav>
      {open ? (
        <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6" />
      ) : (
        <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6" />
      )}
      <span>{open ? "open" : "close"}</span>
      <ul className="md:flex justify-center">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
