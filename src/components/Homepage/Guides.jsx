import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Guides = () => {
  return (
    <>
      <div className="mt-4 flex justify-between gap-4 text-primary-green w-full">
        <div className="bg-primary-green/5 rounded-md p-8 space-y-4 w-1/3">
          <h2 className="text-2xl  font-semibold">
            What is a good debt-to-income ratio for a home loan?
          </h2>
          <button className="rounded-full border hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
            <ArrowRight />
          </button>
          <Image
            className="rounded-lg"
            src="/img/questionare/guides/good-dti.webp"
            alt="hero"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-primary-green/5 rounded-md p-8 flex justify-between gap-8 w-2/3">
          <div className="w-3/5 space-y-6">
            <h2 className="text-2xl  font-semibold">
              Buying a house without realtor
            </h2>
            <p className="text-sm">
              Thinking about buying a house without a real estate agent? Read
              this first.
            </p>
            <button className="rounded-full border  hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
              <ArrowRight />
            </button>
          </div>
          <div className="w-2/5">
            <Image
              src={"/img/questionare/guides/buy-house-without-realtor.webp"}
              alt="hero"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between gap-4 text-primary-green w-full">
        <div className="bg-primary-green/5 rounded-md p-8 flex justify-between gap-8 w-2/3">
          <div className="w-2/5">
            <Image
              src={"/img/questionare/guides/loan-timeline.webp"}
              alt="hero"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-3/5 space-y-6">
            <h2 className="text-2xl  font-semibold">
              Timeline for homebuying process
            </h2>
            <p className="text-sm">
              Does the process of buying a home seem daunting? Don't stress, we
              broke it down into 8 easy steps.
            </p>
            <button className="rounded-full border  hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="bg-primary-green/5 rounded-md p-8 space-y-6 w-1/3">
          <h2 className="text-2xl  font-semibold">Insurance</h2>
          <button className="rounded-full border hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
            <ArrowRight />
          </button>
          <Image
            className="rounded-lg"
            src="/img/questionare/guides/conventional-loan.webp"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Guides;
