import Link from "next/link";

const FooterItems = ({ title, footerItemsObject, className = "" }) => {
  return (
    <div className={` ${className} `}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-4">
        {footerItemsObject.map((item, index) => (
          <li key={index}>
            <Link
              className="hover:underline no-underline transition-all ease-in-out duration-300"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItems;
