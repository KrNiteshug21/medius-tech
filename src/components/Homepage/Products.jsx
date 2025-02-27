import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <>
      <div className="mt-4 flex justify-between gap-4 text-primary-green w-full">
        <div className="bg-primary-green/5 rounded-md p-8 space-y-4 w-1/3">
          <h2 className="text-2xl  font-semibold">
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
            <h2 className="text-2xl  font-semibold">
              One Day Mortage <sup>1</sup>
            </h2>
            <p className="text-sm">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.<sup>1</sup>
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
      </div>

      <div className="mt-4 flex justify-between gap-4 text-primary-green w-full">
        <div className="bg-primary-green/5 rounded-md p-8 flex justify-between gap-8 w-2/3">
          <div className="w-2/5">
            <Image
              src={"/img/questionare/products/better-heloc.webp"}
              alt="hero"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-3/5 space-y-6">
            <h2 className="text-2xl  font-semibold">Better HELOC</h2>
            <p className="text-sm">
              Introducing One Day HELOC™—your express lane to getting cash from
              your home with our Home Equity Line of Credit2. Access up to 90%
              of your home equity as cash in as little as 7 days.
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
            src="/img/questionare/products/insurance.webp"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
