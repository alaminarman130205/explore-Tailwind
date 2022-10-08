import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const PricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "awesome features",
        "extra features ",
        "unnesesery features",
        "will never use features",
        "ajaira features",
      ],
    },
    {
      id: 1,
      name: "Medium",
      price: 0.99,
      features: [
        "Every thing on free",
        "extra features ",
        "unnesesery features",
        "will never use features",
        "ajaira features",
      ],
    },
    {
      id: 1,
      name: "Premium",
      price: 19.99,
      features: [
        "Every thing on premium",
        "extra features ",
        "unnesesery features",
        "will never use features",
        "ajaira features",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-300 p-12 text-white">
        Best Deal of the Town
      </h2>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {PricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
