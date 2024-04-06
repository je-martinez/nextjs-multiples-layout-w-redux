"use client";

import { getCategories } from "@/lib/features/northwind/northwindSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";

const NorthwindCategories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <h2>Categories</h2>
    </div>
  );
};

export default NorthwindCategories;
