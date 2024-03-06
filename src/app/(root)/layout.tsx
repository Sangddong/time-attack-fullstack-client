"use client";

import { useAppSelector } from "@/redux/store";
import React from "react";
import Header from "./(contexts)/header";

function RootLayout({ children }: { children: React.ReactNode }) {
  const modal = useAppSelector((state) => state.utils.modal);

  return (
    <>
      <Header />
      {children}
      {modal}
    </>
  );
}

export default RootLayout;
