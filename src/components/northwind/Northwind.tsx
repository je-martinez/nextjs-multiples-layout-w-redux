"use client";

import { northwindEntities } from "@/constants/northwind.constants";
import React from "react";

const Northwind = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-6 max-w-2xl">
        {northwindEntities.map(({ name, path }) => (
          <React.Fragment key={path}>
            <button className="bg-blue-600 hover:bg-blue-700 h-14 w-52 rounded">
              {name}
            </button>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Northwind;
