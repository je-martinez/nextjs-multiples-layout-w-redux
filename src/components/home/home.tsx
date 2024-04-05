"use client";
import { changeHeaderText } from "@/lib/features/layout/layoutSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeHeaderText("Getting Started"));
  }, [dispatch]);

  return (
    <>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </>
  );
};

export default Home;
