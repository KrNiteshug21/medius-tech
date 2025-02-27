import { ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import React from "react";

const Calculators = () => {
  return (
    <>
      <div className="mt-4 flex justify-between gap-4 text-primary-green w-full">
        <div className="bg-primary-green/5 rounded-md p-8 space-y-4 w-1/3">
          <h2 className="text-2xl  font-semibold">Mortgage Calculator</h2>
          <div className="flex items-end justify-between">
            <button className="rounded-full border hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
              <ArrowRight />
            </button>
            <p className="flex items-center text-sm text-gray-600">
              <Timer size={16} /> 5 minutes
            </p>
          </div>
          <Image
            className="rounded-lg"
            src="/img/questionare/calculators/mortgage-calculator.webp"
            alt="hero"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-primary-green/5 rounded-md p-8 flex justify-between gap-8 w-2/3">
          <div className="w-3/5 space-y-6">
            <h2 className="text-2xl  font-semibold">
              Affordability calculator{" "}
            </h2>
            <p className="text-sm">
              Got homeownership dreams? Let's put some numbers behind them. Our
              affordability calculator estimates the maximum home you can
              afford.
            </p>
            <button className="rounded-full border  hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
              <ArrowRight />
            </button>
          </div>
          <div className="w-2/5">
            <Image
              src={"/img/questionare/calculators/affordability-calculator.webp"}
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
              src={"/img/questionare/calculators/heloc-calculator.webp"}
              alt="hero"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-3/5 space-y-6">
            <h2 className="text-2xl  font-semibold">HELOC Calculator</h2>
            <p className="text-sm">
              Need cash? Quickly see how much equity you can borrow from your
              home and what your monthly payments might be.
            </p>
            <button className="rounded-full border  hover:text-white hover:bg-primary-green hover:border-primary-green border-gray-400 transition-all ease-in-out duration-200 p-2">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="bg-primary-green/5 rounded-md p-8 space-y-6 w-1/3">
          <h2 className="text-2xl font-semibold">
            Fixed-rate loan comparison calculator
          </h2>
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

export default Calculators;
