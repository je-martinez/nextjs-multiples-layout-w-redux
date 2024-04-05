"use client";
import {
  decrement,
  increment,
  selectCount,
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Counter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectCount);

  return (
    <>
      <div className="h-10 w-32">
        <label className="w-full text-white text-sm font-semibold text-center inline-block">
          Counter Input
        </label>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            value={value}
            disabled={true}
          ></input>
          <button
            data-action="increment"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={() => {
              dispatch(increment());
            }}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
