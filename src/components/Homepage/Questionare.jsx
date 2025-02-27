"use client";
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const types = [
  { id: 1, name: "Our Products" },
  { id: 2, name: "Calculators" },
  { id: 3, name: "Guides & FAQs" },
];

const Questionare = () => {
  const [currType, setCurrType] = useState(types[0]);

  return (
    <div className="min-h-screen my-20 mx-2 px-20">
      <div className="">
        <div className="flex items-end justify-between gap-4 ">
          <h1 className="text-5xl font-semibold leading-tight">
            Got Questions? <br /> We've got answers
          </h1>
          <div className="space-x-4">
            {types.map((type) => (
              <CustomButton
                key={type.id}
                obj={type}
                currState={currType}
                setCurrState={setCurrType}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between gap-4 text-primary-green w-full">
          <div className="bg-primary-green/5 rounded-md p-8 space-y-8 w-1/3">
            <h2 className="text-3xl  font-semibold">
              Buying your first home with Better
            </h2>
            <button className="rounded-full border hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
              <ArrowRight />
            </button>
            <Image
              className="rounded-lg"
              src="/img/questionare/products/first-home.webp"
              alt="hero"
              width={500}
              height={500}
            />
          </div>

          <div className="bg-primary-green/5 rounded-md p-8 flex justify-between gap-8 w-2/3">
            <div className="w-3/5 space-y-6">
              <h2 className="text-3xl  font-semibold">
                One Day Mortage <sup>1</sup>
              </h2>
              <p className="text-sm">
                Kick your home loan into hyperdrive. Going from locked rate to
                Commitment Letter takes weeks for traditional lenders. We do it
                in a single day. Traditional lenders deliver a Commitment Letter
                in a few weeks.<sup>1</sup>
              </p>
              <button className="rounded-full border  hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
                <ArrowRight />
              </button>
            </div>
            <div className="w-2/5">
              <Image
                src={"/img/questionare/products/one-day-mortgage.webp"}
                alt="hero"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>

          <div></div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Questionare;
