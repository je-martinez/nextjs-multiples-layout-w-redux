"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Path {
  path: string;
  name: string;
}

const paths: Path[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Counter",
    path: "/counter",
  },
  {
    name: "Northwind",
    path: "/northwind",
  },
];

const NavigationButtons = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-row justify-start">
      {paths.map((path) => (
        <React.Fragment key={path.path}>
          <Link
            href={path.path}
            className="middle p-2 m-2 h-12 hover:border-b-4 border-b-blue-500 text-white"
            data-ripple-light="true"
          >
            {path.name}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationButtons;
