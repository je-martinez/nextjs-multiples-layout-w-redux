"use client";

import { northwindEntities } from "@/constants/northwind.constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Northwind = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-6 max-w-2xl">
        {northwindEntities.map(({ name, path }) => (
          <React.Fragment key={path}>
            <Link
              href={`/northwind/${path}`}
              className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 h-14 w-52 rounded"
            >
              {name}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Northwind;
