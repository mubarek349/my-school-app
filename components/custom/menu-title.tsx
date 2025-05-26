
"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function MenuTitle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 transition-all duration-300",
        className
      )}
    >
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
        <Image
          src="/logo.jpg"
          alt="Darulkubra logo"
          fill
          sizes="(max-width: 768px) 48px, 56px"
          className="object-cover"
          priority
        />
      </div>
      <h1
        className="text-xl md:text-2xl font-bold text-sky-900 dark:text-white tracking-tight"
      >
        Darulkubra
      </h1>
    </div>
  );
}

export default MenuTitle;
