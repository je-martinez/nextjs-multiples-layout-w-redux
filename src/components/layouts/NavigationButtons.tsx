"use client";
import { navigationOptions } from "@/constants/navigation.constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavigationButtons = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-row w-full justify-center font-sans font-semibold">
      {navigationOptions.map(({ name, path }) => (
        <React.Fragment key={path}>
          <Link
            href={path}
            className="middle p-2 m-2 h-12 hover:border-b-4 border-b-blue-500 text-white"
            data-ripple-light="true"
          >
            {name}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationButtons;
