import CustomButton from "@/components/CustomButton";
import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`inline-flex items-center  whitespace-nowrap rounded-full  leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 hover:border border-gray-400 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-primary-green hover:shadow-[0_0_0_4px_inset] hover:text-primary-green h-12  w-auto ${className}`}
    >
      {children}
    </button>
  );
};

const StartPage = () => {
  return (
    <main>
      <header>
        <div className="max-w-screen-xl mx-auto py-10">
          <div className="flex justify-between items-center gap-4">
            <h2>
              Better <br /> Mortgage
            </h2>
            <Button className="rounded-md space-x-2 px-6 py-3">
              <span className="p-1 bg-green-200 rounded-full">
                <Phone />
              </span>{" "}
              <span>Need help? Call (415) 523 8837</span>
            </Button>
          </div>

          <div className="my-10 relative">
            <div className="w-full h-1 bg-gray-200 rounded-full" />
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
              src="/img/customer/betty.jpg"
              width={50}
              height={50}
              alt="Betsy"
            />
          </div>
        </div>
      </header>

      <section className="flex flex-col items-center">
        <h2 className="text-center text-5xl font-semibold">
          Hi, I'm Betsy! <br />
          What can I help you with?
        </h2>
        <div className="flex flex-col gap-4 my-10">
          <Button
            className={"w-[550px] border p-8 rounded-md text-xl font-semibold"}
          >
            Buying a home
          </Button>
          <Button
            className={"w-[550px] border p-8 rounded-md text-xl font-semibold"}
          >
            Refinance my mortgage
          </Button>
          <Button
            className={"w-[550px] border p-8 rounded-md text-xl font-semibold"}
          >
            Get cash from my home
          </Button>
        </div>

        <div className="flex text-center items-center gap-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">$100B</h2>
            <p>home loans funded entirely online</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">400K</h2>
            <p>Customers who chose a Better Mortgage</p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-green-100 text-gray-600 w-[600px] p-4 rounded-md mt-6">
          <div className="space-y-4">
            <p>After a few questions, you'll unlock:</p>
            <p>Custom mortgage rates</p>
            <p>Exclusive offers</p>
            <p>A personalized dashboard</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartPage;
