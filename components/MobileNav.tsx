"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/contants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            className="cursor-pointer sm:hidden"
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-dark-1" side="left">
          <Link className="flex items-center gap-1" href="/">
            <Image
              className="max-sm:size-10"
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Yoom Logo"
            />
            <p className="text-[26px] font-extrabold text-white">Yoom</p>
          </Link>
          <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-auto">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-blue-1": isActive }
                        )}
                        href={link.route}
                        key={link.label}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
