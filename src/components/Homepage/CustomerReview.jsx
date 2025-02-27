"use client";
import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import CustomButton from "../CustomButton";

const customers = [
  {
    id: 1,
    name: "Arian",
    img: "/img/customer/arian.webp",
  },
  {
    id: 2,
    name: "Amanda",
    img: "/img/customer/amanda.webp",
  },
  {
    id: 3,
    name: "Paul",
    img: "/img/customer/paul.webp",
  },
];

const CustomerReview = () => {
  const [currCustomer, setCurrCustomer] = useState(customers[0]);
  console.log(currCustomer);

  return (
    <div className="min-h-screen my-20">
      <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col  gap-4">
          <Image
            src={currCustomer.img}
            width={350}
            height={600}
            alt={currCustomer.name}
            className="rounded-lg"
          />
          <div className="flex gap-4">
            {customers.map((customer) => (
              <CustomButton
                key={customer.id}
                obj={customer}
                currState={currCustomer}
                setCurrState={setCurrCustomer}
              />
            ))}
          </div>
        </div>
        <div className="grid place-content-center gap-2">
          <h1 className="text-8xl font-semibold my-4">
            Find out why we’re better.
          </h1>
          <button className="w-max bg-primary-green text-lg hover:bg-primary-green/90 text-white py-6 px-10 rounded-full">
            See all our stories
          </button>
          <p className="text-gray-400">
            Trustpilot Excellent <span className="font-medium">4.4</span> out of
            5
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CustomerReview;
