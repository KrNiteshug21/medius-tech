import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterItems from "./FooterItems";
import {
  BetterServices,
  Company,
  Contact,
  Legal,
  Resources,
} from "./footer-data";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto p-2">
        <div className="mb-4">
          <Image
            src="/img/green-logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className=" text-gray-900 w-full flex justify-between gap-4">
          <div className="space-y-4 w-2/5 ">
            <p className="text-lg">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
            <ul className="space-y-4 text-sm">
              {BetterServices.map((service, index) => (
                <li key={index}>
                  <Link className="text-xl" href={service.href}>
                    <span className="text-green-700">Better </span>
                    <span className="text-gray-400">{service.title}</span>
                  </Link>
                  <p className="font-normal tracking-wide">{service.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <FooterItems
            className={"w-1/5 "}
            title="Resources"
            footerItemsObject={Resources}
          />
          <FooterItems
            className={"w-1/5 "}
            title="Company"
            footerItemsObject={Company}
          />
          <div className="flex flex-col gap-8 w-1/5 ">
            <FooterItems title="Contact" footerItemsObject={Contact} />
            <FooterItems title="Legal" footerItemsObject={Legal} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
