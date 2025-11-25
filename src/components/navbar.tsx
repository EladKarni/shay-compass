"use client";
import { FC, ReactNode } from "react";
import Link from "next/link";
import MobileNavMenu from "./MobileMenu";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { Logo } from "@/ui/icons/logo";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }) => {
  return (
    <header
      className="py-5 bg-base-200 fixed top-0 left-0 w-full shadow-md lg:hidden"
      style={{
        height: LAYOUT_CONSTANTS.NAVBAR_HEIGHT,
        minWidth: LAYOUT_CONSTANTS.MIN_VIEWPORT_WIDTH,
        zIndex: LAYOUT_CONSTANTS.Z_INDEX.NAVBAR,
      }}
    >
      <div className="h-full flex flex-col justify-center max-w-[1024px] lg:mx-auto mx-4">
        <div className="flex justify-between items-center relative">
          <div className="max-w-[183px] lg:max-w-[163px]">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <MobileNavMenu />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
