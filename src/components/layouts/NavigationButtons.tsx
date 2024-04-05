"use client";
import { useRouter } from "next/navigation";

interface Path {
  path: string;
  name: string;
}

const paths: Path[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/counter",
    name: "Counter",
  },
];

const NavigationButtons = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-row justify-start">
      {paths.map((path) => (
        <button
          key={path.path}
          className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={() => {
            push(path.path);
          }}
        >
          {path.name}
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;
