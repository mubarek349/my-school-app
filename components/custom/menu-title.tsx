"use client";
import React from "react";
import Image from "next/image";

function MenuTitle() {
  return (
    <div className="flex items-center">
      <Image src="/logo.jpg" alt="Darulkubra" width={40} height={40} />
    </div>
  );
}
export default MenuTitle;
