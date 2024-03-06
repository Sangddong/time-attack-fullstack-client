import Link from "next/link";
import React from "react";
import HeaderAuthButton from "./headerButtons/auth/HeaderAuthButton";
import HeaderMenus from "./headerButtons/menus/HeaderMenus";

function Header() {
  return (
    <header className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8 border-b-2 border-grey-100">
      <ul className="flex flex-row justify-stretch">
        <li className="flex-2 pr-5">
          <Link href="/">중고마켓</Link>
        </li>
        <li className="flex-1">
          <HeaderMenus />
        </li>
        <li className="flex-5">
          <HeaderAuthButton />
        </li>
      </ul>
    </header>
  );
}

export default Header;
