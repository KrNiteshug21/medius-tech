"use client";
import { useState } from "react";
import SubNavItem from "./SubNavItem";

const NavItem = (nav) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <p className="hover:bg-gray-100 py-3 px-6 rounded-full">{nav.mainText}</p>
      {toggle ? (
        <div className="absolute  top-16">
          <div className="my-2" />
          <div className="bg-white flex flex-col gap-2 shadow-md p-2 rounded-lg">
            {nav.subNavigation.map((subNav) => (
              <SubNavItem key={subNav.text} {...subNav} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
