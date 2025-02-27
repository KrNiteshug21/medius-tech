"use client";
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import Products from "./Products";
import Calculators from "./Calculators";
import Guides from "./Guides";

const types = [
  { id: 1, name: "Our Products" },
  { id: 2, name: "Calculators" },
  { id: 3, name: "Guides & FAQs" },
];

const Questionare = () => {
  const [currType, setCurrType] = useState(types[1]);

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

        {currType.id === 1 && <Products />}
        {currType.id === 2 && <Calculators />}
        {currType.id === 3 && <Guides />}
      </div>
    </div>
  );
};

export default Questionare;
