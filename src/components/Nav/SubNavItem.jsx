import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SubNavItem = (subNav) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-80 hover:bg-gray-100 py-2 px-3 rounded-sm flex justify-between items-center gap-6"
      key={subNav.text}
      href={subNav.href}
    >
      <span>{subNav.text}</span>
      {hover && (
        <span>
          <MoveRight />
        </span>
      )}
    </Link>
  );
};

export default SubNavItem;
